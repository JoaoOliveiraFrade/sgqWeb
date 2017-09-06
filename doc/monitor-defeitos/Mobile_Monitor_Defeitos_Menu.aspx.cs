using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI.WebControls;
using System.IO;
using Classes;
using System.Data;
using System.Text;
using System.Linq;

public partial class Mobile : System.Web.UI.Page
{
    private string Caminho_Sqls = @"~\Sqls\Mobile\";

    private bool Algum_Projeto_Selecionado;

    protected void Page_Load(object sender, EventArgs e)
    {
        Set_Var_Session();

        Label Label_Modulo = (Label)Master.FindControl("Label_Modulo");
        Label_Modulo.Text = " - Monitor Defeitos";

        if (!IsPostBack)
        {
            HttpContext.Current.Session.Timeout = 9000;

            if (Session["Lista_Filas"] == null)
                Session["Lista_Filas"] = "";

            if (Session["Lista_Status_Dev"] == null)
                Session["Lista_Status_Dev"] = "";

            if (Session["Lista_Status_Test"] == null)
                Session["Lista_Status_Test"] = "";

            if (Session["Lista_Farois"] == null)
                Session["Lista_Farois"] = "";

            if (Session["Lista_Projetos"] == null)
                Session["Lista_Projetos"] = "";

            if (Session["Lista_Abreviada_Projetos"] == null)
                Session["Lista_Abreviada_Projetos"] = "";

            Algum_Projeto_Selecionado = false;

            if (Session["Classificacao"] == null)
                Session["Classificacao"] = "";

            if (Session["Classificacao"].ToString() == "")
            {
                Session["Classificacao"] = "RELEASE";
                Label_Classificacao.Text = Session["Classificacao"].ToString();
            }

            if (Session["Release"] == null)
                Session["Release"] = "";

            if (Session["Release"].ToString() == "")
            {
                Connection conn = new Connection("SGQ");
                string Sigla_Nome = conn.Get_String_Por_Id("Meses", "Nome", DateTime.Today.Month.ToString());
                string Sigla_Mes = conn.Get_String_Por_Id("Meses", "Sigla", DateTime.Today.Month.ToString());
                conn.Dispose();

                RadioButtonList_Release.DataBind();
                Session["Release"] = Sigla_Nome + '-' + DateTime.Today.Year.ToString();
                Session["Release_Mes"] = DateTime.Today.Month.ToString();
                Session["Release_Ano"] = DateTime.Today.Year.ToString();

                Label_Release.Text = Sigla_Mes + '-' + DateTime.Today.Year.ToString();
            }

            if (Session["Gerencia_N3"] == null)
                Session["Gerencia_N3"] = "";

            Consultar_Projetos();

            Restaurar_Selecoes_Filas();

            Restaurar_Selecoes_Status();

            Restaurar_Selecoes_Farois();

            Restaurar_Selecoes_Projetos();

            Refresh_Tela();
        }

    }

    private string Alterar_Paramentros_Sql(string sql)
    {
        if (Label_Gerencia_N3.Text != "")
            sql = sql.Replace("{Condicao_Gerencia_N3}", "us.Gerencia_N3 = '" + Session["Gerencia_N3"].ToString() + "'");
        else
            sql = sql.Replace("{Condicao_Gerencia_N3}", "1=1");

        if (Session["Classificacao"].ToString() != "")
            if (Session["Classificacao"].ToString() == "TODAS")
                sql = sql.Replace("{Condicao_Classificacao}", "1=1");
            else
                sql = sql.Replace("{Condicao_Classificacao}", "sp.Classificacao_Nome = '" + Session["Classificacao"].ToString() + "'");
        else
            sql = sql.Replace("{Condicao_Classificacao}", "1=1");

        if (Session["Release"].ToString() != "")
            sql = sql.Replace("{Condicao_Release}", "(select Nome from SGQ_Meses m WITH (NOLOCK) where  m.id = re.release_mes) + '-' + cast(re.release_ano as varchar) = '" + Session["Release"].ToString() + "'");
        else
            sql = sql.Replace("{Condicao_Release}", "1=1");

        return sql;
    }

    protected void GridView_Projeto_RowDataBound1(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            e.Row.Attributes.Add("onClick", "javascript:void SelectRow(this);");
        }
    }
    protected void RadioButtonList_Gerencia_N3_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session["Gerencia_N3"] = RadioButtonList_Gerencia_N3.SelectedItem.Value.ToString();
        Session["Gerencia_N3_Abreviado"] = RadioButtonList_Gerencia_N3.SelectedItem.Text.ToString();
        Label_Gerencia_N3.Text = Session["Gerencia_N3_Abreviado"].ToString();
        RadioButtonList_Gerencia_N3.Visible = false;
        Label_Gerencia_N3.Visible = true;
        ImageButton_Limpar_Filtro_Gerencia_N3.Visible = true;

        Consultar_Projetos();
    }

    protected void RadioButtonList_Classificacao_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session["Classificacao"] = RadioButtonList_Classificacao.SelectedItem.Value.ToString();
        Esconder_Opcoes_Filtros();
        Consultar_Projetos();
    }

    protected void RadioButtonList_Projeto_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session["subprojeto"] = GridView_Projetos.SelectedDataKey.Value.ToString().Substring(0, 5);
        Session["entrega"] = GridView_Projetos.SelectedDataKey.Value.ToString().Substring(6, 5);
        Response.Redirect("./Mobile_Status_Projeto_Dados.aspx");
    }

    protected void Esconder_Opcoes_Filros()
    {
        RadioButtonList_Gerencia_N3.Visible = false;
    }

    protected void Limpar_Selecoes()
    {
        Session["Gerencia_N3"] = "";
        Label_Gerencia_N3.Text = "";
        Label_Gerencia_N3.Visible = false;
        RadioButtonList_Gerencia_N3.DataBind();
        ImageButton_Limpar_Filtro_Gerencia_N3.Visible = false;

        Session["Classificacao"] = "";
        RadioButtonList_Classificacao.DataBind();
    }

    protected void Exibir_Filtros()
    {
        Label_Gerencia_N3.Visible = true;
    }

    protected void ImageButton_Limpar_Filtro_Gerencia_N3_Click(object sender, System.Web.UI.ImageClickEventArgs e)
    {
        Session["Gerencia_N3"] = "";
        Label_Gerencia_N3.Text = "";
        RadioButtonList_Gerencia_N3.SelectedIndex = -1;
        ImageButton_Limpar_Filtro_Gerencia_N3.Visible = false;
        RadioButtonList_Gerencia_N3.Visible = false;
        Consultar_Projetos();
    }

    protected void ImageButton_Limpar_Filtro_Classificacao_Click(object sender, System.Web.UI.ImageClickEventArgs e)
    {
        Session["Classificacao"] = "";
        Consultar_Projetos();
    }

    protected void ImageButton_Criar_Filtro_Gerencia_N3_Click(object sender, System.Web.UI.ImageClickEventArgs e)
    {
        Button_Gerencia_N3_Click(sender, (EventArgs)e);
    }
    protected void Button_Gerencia_N3_Click(object sender, EventArgs e)
    {
        bool Visivel = RadioButtonList_Gerencia_N3.Visible;

        RadioButtonList_Gerencia_N3.Visible = !Visivel;
    }

    protected void ImageButton_Criar_Filtro_Classificacao_Click(object sender, System.Web.UI.ImageClickEventArgs e)
    {
        Button_Classificacao_Click(sender, (EventArgs)e);
    }
    protected void Button_Classificacao_Click(object sender, EventArgs e)
    {
        Exibir_Filtros();
        bool Visivel = RadioButtonList_Classificacao.Visible;


        Esconder_Opcoes_Filros();
        RadioButtonList_Classificacao.Visible = !Visivel;
    }

    private bool Algum_Selecionado(CheckBoxList Lista)
    {
        foreach (ListItem item in Lista.Items)
        {
            if (item.Selected)
                return true;
        }
        return false;
    }

    private bool Algum_Selecionado(GridView itens, string nomeCheckBox)
    {
        for (int i = 0; i < itens.Rows.Count; i++)
        {
            GridViewRow row = itens.Rows[i];
            CheckBox CheckBox_Projeto = (CheckBox)row.FindControl(nomeCheckBox);

            if (CheckBox_Projeto.Checked)
            {
                return true;
            }
        }
        return false;
    }

    private bool Todos_Selecionado(GridView itens, string nomeCheckBox)
    {
        for (int i = 0; i < itens.Rows.Count; i++)
        {
            GridViewRow row = itens.Rows[i];
            CheckBox CheckBox_Projeto = (CheckBox)row.FindControl(nomeCheckBox);

            if (!CheckBox_Projeto.Checked)
            {
                return false;
            }
        }
        return true;
    }

    private bool Todos_Selecionados(CheckBoxList Lista)
    {
        foreach (ListItem item in Lista.Items)
        {
            if (!item.Selected)
                return false;
        }
        return true;
    }

    protected void Button_Monitorar_Click(object sender, EventArgs e)
    {
        if (!Algum_Selecionado(CheckBoxList_Fila))
        {
            Label_Mensagem.Text = "Informe a Fila!";
            Label_Mensagem.Visible = true;

            Refresh_Tela();

            return;
        }

        if (!Algum_Selecionado(CheckBoxList_Status_Dev) & !Algum_Selecionado(CheckBoxList_Status_Test))
        {
            Label_Mensagem.Text = "Informe o Status!";
            Label_Mensagem.Visible = true;

            Refresh_Tela();

            return;
        }


        if (!Algum_Selecionado(GridView_Projetos, "CheckBox_Projeto"))
        {
            Label_Mensagem.Text = "Informe o Projeto!";
            Label_Mensagem.Visible = true;

            Refresh_Tela();

            return;
        }
        Response.Redirect("./Mobile_Monitor_Defeitos_Dados.aspx");
    }
    protected void Button_Monitorar_Click_Ping_Pong(object sender, EventArgs e)
    {
        if (!Algum_Selecionado(CheckBoxList_Fila))
        {
            Label_Mensagem.Text = "Informe a Fila!";
            Label_Mensagem.Visible = true;

            Refresh_Tela();

            return;
        }

        if (!Algum_Selecionado(CheckBoxList_Status_Dev) & !Algum_Selecionado(CheckBoxList_Status_Test))
        {
            Label_Mensagem.Text = "Informe o Status!";
            Label_Mensagem.Visible = true;

            Refresh_Tela();

            return;
        }


        if (!Algum_Selecionado(GridView_Projetos, "CheckBox_Projeto"))
        {
            Label_Mensagem.Text = "Informe o Projeto!";
            Label_Mensagem.Visible = true;

            Refresh_Tela();

            return;
        }
        Response.Redirect("./Mobile_Monitor_Defeitos_Dados_Ping_Pong.aspx");
    }
    void Consultar_Projetos()
    {
        SqlDataSource_Projetos.SelectCommand = Alterar_Paramentros_Sql(File.ReadAllText(Server.MapPath(Caminho_Sqls + "Projetos.sql")));
        GridView_Projetos.DataBind();

        Refresh_Controles();
    }

    private void Gravar_Selecoes_Filas()
    {
        string Lista_Filas = "";

        foreach (ListItem item in CheckBoxList_Fila.Items)
        {
            if (item.Selected)
                Lista_Filas += "'" + item.ToString() + "',";
        }

        if (Lista_Filas != "")
            Session["Lista_Filas"] = Lista_Filas.Substring(0, Lista_Filas.Length - 1);
        else
            Session["Lista_Filas"] = "";
    }

    private void Gravar_Selecoes_Status_Dev()
    {
        string Lista_Status_Dev = "";

        foreach (ListItem item in CheckBoxList_Status_Dev.Items)
        {
            if (item.Selected)
                Lista_Status_Dev = Lista_Status_Dev + "'" + item.ToString() + "',";
        }

        if (Lista_Status_Dev != "")
            Session["Lista_Status_Dev"] = Lista_Status_Dev.Substring(0, Lista_Status_Dev.Length - 1);
        else
            Session["Lista_Status_Dev"] = "";
    }

    private void Gravar_Selecoes_Status_Test()
    {
        string Lista_Status_Test = "";

        foreach (ListItem item in CheckBoxList_Status_Test.Items)
        {
            if (item.Selected)
                Lista_Status_Test = Lista_Status_Test + "'" + item.ToString() + "',";
        }

        if (Lista_Status_Test != "")
            Session["Lista_Status_Test"] = Lista_Status_Test.Substring(0, Lista_Status_Test.Length - 1);
        else
            Session["Lista_Status_Test"] = "";
    }

    private void Gravar_Selecoes_Projetos()
    {
        string Lista_Projetos = "";
        string Lista_Abreviada_Projetos = "";

        foreach (GridViewRow row in GridView_Projetos.Rows)
        {
            if (row.RowType == DataControlRowType.DataRow)
            {
                CheckBox chk = (CheckBox)row.FindControl("CheckBox_Projeto");

                if ((bool)chk.Checked)
                {
                    string key = chk.ToolTip.ToString();
                    int subprojeto = 0; Int32.TryParse(key.Substring(3, 8), out subprojeto);
                    int entrega = 0; Int32.TryParse(key.Substring(19, 8), out entrega);

                    Lista_Projetos += "'" + key + "',";
                    Lista_Abreviada_Projetos += subprojeto.ToString() + "-" + entrega.ToString() + ",";
                }
            }
        }

        if (Lista_Projetos != "")
        {
            Session["Lista_Projetos"] = Lista_Projetos.Substring(0, Lista_Projetos.Length - 1);
            Session["Lista_Abreviada_Projetos"] = Lista_Abreviada_Projetos.Substring(0, Lista_Abreviada_Projetos.Length - 1);
        }
        else
        {
            Session["Lista_Projetos"] = "";
            Session["Lista_Abreviada_Projetos"] = "";
        }
    }

    private void Restaurar_Selecoes_Filas()
    {
        if (Session["Lista_Filas"].ToString() != "")
        {
            string[] Filas_Array = Session["Lista_Filas"].ToString().Split(',');

            CheckBoxList_Fila.DataBind();
            if (CheckBoxList_Fila.Items.Count > 0)
                foreach (string item in Filas_Array)
                {
                    var itemEncontrado = CheckBoxList_Fila.Items.FindByText(item.Replace("'", ""));
                    if (itemEncontrado != null)
                        itemEncontrado.Selected = true;
                }
        }
    }

    private void Restaurar_Selecoes_Status()
    {
        if (Session["Lista_Status_Dev"].ToString() != "")
        {
            string[] Filas_Array = Session["Lista_Status_Dev"].ToString().Split(',');

            CheckBoxList_Status_Dev.DataBind();
            if (CheckBoxList_Status_Dev.Items.Count > 0)
                foreach (string item in Filas_Array)
                {
                    var itemEncontrado = CheckBoxList_Status_Dev.Items.FindByText(item.Replace("'", ""));
                    if (itemEncontrado != null)
                        itemEncontrado.Selected = true;
                }
        }

        if (Session["Lista_Status_Test"].ToString() != "")
        {
            string[] Filas_Array = Session["Lista_Status_Test"].ToString().Split(',');

            CheckBoxList_Status_Test.DataBind();
            if (CheckBoxList_Status_Test.Items.Count > 0)
                foreach (string item in Filas_Array)
                {
                    var itemEncontrado = CheckBoxList_Status_Test.Items.FindByText(item.Replace("'", ""));
                    if (itemEncontrado != null)
                        itemEncontrado.Selected = true;
                }
        }
    }

    private void Restaurar_Selecoes_Farois()
    {
        if (Session["Lista_Farois"].ToString() != "")
        {
            string[] Filas_Array = Session["Lista_Farois"].ToString().Split(',');

            CheckBoxList_Farol.DataBind();
            if (CheckBoxList_Farol.Items.Count > 0)
                foreach (string item in Filas_Array)
                {
                    var itemEncontrado = CheckBoxList_Farol.Items.FindByText(item.Replace("'", ""));
                    if (itemEncontrado != null)
                        itemEncontrado.Selected = true;
                }
        }
    }

    private void Restaurar_Selecoes_Projetos()
    {
        if (Session["Lista_projetos"].ToString() != "")
        {
            string[] Array = Session["Lista_projetos"].ToString().Replace("'", "").Split(',');
            List<string> List = new List<string>(Array);

            foreach (GridViewRow row in GridView_Projetos.Rows)
            {
                if (row.RowType == DataControlRowType.DataRow)
                {
                    CheckBox chk = (CheckBox)row.FindControl("CheckBox_Projeto");
                    chk.Checked = List.Contains(chk.ToolTip);
                }
            }
        }

        Gravar_Selecoes_Projetos();
    }

    private void marcarTodosProjetos()
    {
        foreach (GridViewRow row in GridView_Projetos.Rows)
        {
            if (row.RowType == DataControlRowType.DataRow)
            {
                CheckBox chk = (CheckBox)row.FindControl("CheckBox_Projeto");
                chk.Checked = true;
            }
        }
    }

    protected void Button_Projetos_Click(object sender, EventArgs e)
    {
        Panel_Projetos.Visible = !Panel_Projetos.Visible;
        Refresh_Tela();
    }

    protected void ImageButton_Criar_Filtro_Release_Click(object sender, System.Web.UI.ImageClickEventArgs e)
    {
        RadioButtonList_Release.Visible = !RadioButtonList_Release.Visible;
    }

    protected void RadioButtonList_Release_SelectedIndexChanged(object sender, EventArgs e)
    {
        string Release = RadioButtonList_Release.SelectedItem.Value.ToString();
        BD oBD = new BD(Lib.SGQ());
        Session["Release"] = Release;
        Session["Release_Mes"] = oBD.RetornaString("select id from SGQ_Meses WITH (NOLOCK) where Nome='" + Release.Split('-')[0] + "'");
        Session["Release_Ano"] = Release.ToString().Split('-')[1];
        oBD.Close();

        Esconder_Opcoes_Filtros();
        Consultar_Projetos();
    }

    protected void Esconder_Opcoes_Filtros()
    {
        RadioButtonList_Release.Visible = false;
        RadioButtonList_Gerencia_N3.Visible = false;
        RadioButtonList_Classificacao.Visible = false;
    }

    private void Set_Var_Session()
    {
        if (Session["Classificacao"] == null)
            Session["Classificacao"] = "";

        if (Session["Release"] == null)
            Session["Release"] = "";

        if (Session["Gerencia_N3"] == null)
            Session["Gerencia_N3"] = "";
    }

    private void Refresh_Controles()
    {

        if (Session["Classificacao"].ToString() == "")
        {
            Label_Classificacao.Text = "";
            Label_Classificacao.Visible = false;
            ImageButton_Limpar_Filtro_Classificacao.Visible = false;
            RadioButtonList_Classificacao.SelectedIndex = -1;
        }
        else
        {
            Label_Classificacao.Text = Session["Classificacao"].ToString();
            Label_Classificacao.Visible = true;
            ImageButton_Limpar_Filtro_Classificacao.Visible = true;
        }

        if (Session["Release"].ToString() == "")
        {
            Label_Release.Text = "";
            Label_Release.Visible = false;
            ImageButton_Limpar_Filtro_Release.Visible = false;
            RadioButtonList_Release.SelectedIndex = -1;
        }
        else
        {
            string s = Session["Release"].ToString();

            Label_Release.Text = s.Substring(0, 3) + '-' + s.Substring(s.Length - 4, 4);
            Label_Release.Visible = true;
            ImageButton_Limpar_Filtro_Release.Visible = true;
        }


        if (Session["Gerencia_N3"].ToString() == "")
        {
            Label_Gerencia_N3.Text = "";
            Label_Gerencia_N3.Visible = false;
            ImageButton_Limpar_Filtro_Gerencia_N3.Visible = false;
            RadioButtonList_Gerencia_N3.SelectedIndex = -1;
        }
        else
        {
            RadioButtonList RadioButtonList_Gerencia_N3 = (RadioButtonList)Panel_Projetos.FindControl("RadioButtonList_Gerencia_N3");
            Label_Gerencia_N3.Text = Session["Gerencia_N3_Abreviado"].ToString();
            Label_Gerencia_N3.Visible = true;
            ImageButton_Limpar_Filtro_Gerencia_N3.Visible = true;
        }
    }

    protected void ImageButton_Limpar_Filtro_Release_Click(object sender, System.Web.UI.ImageClickEventArgs e)
    {
        Session["Release"] = "";
        Session["Release_Mes"] = "";
        Session["Release_Ano"] = "";

        Consultar_Projetos();
    }

    protected void CheckBoxList_Status_SelectedIndexChanged(object sender, EventArgs e)
    {
        Gravar_Selecoes_Filas();
    }

    private void Refresh_Tela()
    {
        Label_Filas_Selecionadas.Text = Session["Lista_Filas"].ToString().Replace("','", ", ");
        Label_Status_Selecionados_Dev.Text = Session["Lista_Status_Dev"].ToString().Replace("','", ", ");
        Label_Status_Selecionados_Test.Text = Session["Lista_Status_Test"].ToString().Replace("','", ", ");
        Label_Farois_Selecionados.Text = Session["Lista_Farois"].ToString().Replace(",", ", ");
        Label_Projetos_Selecionados.Text = Session["Lista_Abreviada_Projetos"].ToString().Replace(",", ", ");

        Label_Projetos_Selecionados.Visible = !Panel_Projetos.Visible;

        if (Todos_Selecionados(CheckBoxList_Fila) && CheckBoxList_Fila.Items.Count > 0)
            CheckBox_Todas_Filas.Checked = true;
        else
            CheckBox_Todas_Filas.Checked = false;

        if (Todos_Selecionados(CheckBoxList_Status_Dev) && CheckBoxList_Status_Dev.Items.Count > 0)
            CheckBox_Todos_Status_Dev.Checked = true;
        else
            CheckBox_Todos_Status_Dev.Checked = false;

        if (Todos_Selecionados(CheckBoxList_Status_Test) && CheckBoxList_Status_Test.Items.Count > 0)
            CheckBox_Todos_StatusTest.Checked = true;
        else
            CheckBox_Todos_StatusTest.Checked = false;

        if (Todos_Selecionados(CheckBoxList_Farol) && CheckBoxList_Farol.Items.Count > 0)
            CheckBox_Todos_Farois.Checked = true;
        else
            CheckBox_Todos_Farois.Checked = false;

        if (Todos_Selecionado(GridView_Projetos, "CheckBox_Projeto") && GridView_Projetos.Rows.Count > 0)
            CheckBox_Todos_Projetos.Checked = true;
        else
            CheckBox_Todos_Projetos.Checked = false;
    }

    protected void Button_Confirmar_Lista_De_Fila_Click(object sender, EventArgs e)
    {
        Gravar_Selecoes_Filas();
        Refresh_Tela();
    }

    protected void Button_Confirmar_Lista_De_Status_Click(object sender, EventArgs e)
    {
        Gravar_Selecoes_Status_Dev();
        Gravar_Selecoes_Status_Test();
        Refresh_Tela();
    }

    protected void GridView_Projetos_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox CheckBox_Projeto = (CheckBox)e.Row.Cells[0].FindControl("CheckBox_Projeto");
            if (CheckBox_Projeto.Checked)
            {
                Algum_Projeto_Selecionado = true;
                return;
            }
        }
    }

    protected void Button_Confirmar_Lista_De_Projetos_Click(object sender, EventArgs e)
    {
        Gravar_Selecoes_Projetos();

        Panel_Projetos.Visible = false;

        Refresh_Tela();
    }

    protected void CheckBox_Todas_Filas_CheckedChanged(object sender, EventArgs e)
    {
        foreach (ListItem item in CheckBoxList_Fila.Items)
            item.Selected = CheckBox_Todas_Filas.Checked;

        Gravar_Selecoes_Filas();

        Refresh_Tela();
    }

    protected void CheckBox_Todos_Status_Dev_CheckedChanged(object sender, EventArgs e)
    {

        foreach (ListItem item in CheckBoxList_Status_Dev.Items) 
            item.Selected = CheckBox_Todos_Status_Dev.Checked;

        Gravar_Selecoes_Status_Dev();

        Refresh_Tela();
    }

    protected void CheckBox_Todos_Projetos_CheckedChanged(object sender, EventArgs e)
    {
        foreach (GridViewRow row in GridView_Projetos.Rows)
        {
            if (row.RowType == DataControlRowType.DataRow)
            {
                CheckBox chk = (CheckBox)row.FindControl("CheckBox_Projeto");
                chk.Checked = CheckBox_Todos_Projetos.Checked;
            }
        }

        Gravar_Selecoes_Projetos();

        Panel_Projetos.Visible = false;

        Refresh_Tela();
    }

    protected void GridView_Projetos_DataBinding(object sender, EventArgs e)
    {
        CheckBox_Todos_Projetos.Checked = false;
    }

    protected void Button_Voltar_Click(object sender, EventArgs e)
    {
        Response.Redirect("Mobile.aspx");
    }

    private void Gravar_Selecoes_Farois()
    {
        string Lista_Farois = "";

        foreach (ListItem item in CheckBoxList_Farol.Items)
        {
            if (item.Selected)
                Lista_Farois += "'" + item.ToString() + "',";
        }

        if (Lista_Farois != "")
            Session["Lista_Farois"] = Lista_Farois.Substring(0, Lista_Farois.Length - 1);
        else
            Session["Lista_Farois"] = "";
    }

    protected void CheckBox_Todos_Farois_CheckedChanged(object sender, EventArgs e)
    {
        foreach (ListItem item in CheckBoxList_Farol.Items)
            item.Selected = CheckBox_Todos_Farois.Checked;

        Gravar_Selecoes_Farois();

        Refresh_Tela();
    }

    protected void Button_Confirmar_Lista_De_Farol_Click(object sender, EventArgs e)
    {
        Gravar_Selecoes_Farois();
        Refresh_Tela();
    }


    protected void CheckBox_Todos_Status_Test_CheckedChanged(object sender, EventArgs e)
    {
        foreach (ListItem item in CheckBoxList_Status_Test.Items)
        item.Selected = CheckBox_Todos_StatusTest.Checked;
        Gravar_Selecoes_Status_Test();
        Refresh_Tela();
    }
}
