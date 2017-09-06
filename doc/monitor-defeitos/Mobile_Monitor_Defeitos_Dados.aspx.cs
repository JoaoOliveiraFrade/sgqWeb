using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI.WebControls;
using System.IO;
using Classes;
using System.Data;
using System.Web.UI;
//using System.Drawing;
using ALM_Classes;
using System.Data.OracleClient;


public partial class Mobile : System.Web.UI.Page
{
    private string Caminho_Sqls = @"~\Sqls\Mobile\";
    ALM_Connection_BD oALM_Connection = new ALM_Connection_BD();
    Connection Connection = new Connection("SGQ");

    protected void Page_Load(object sender, EventArgs e)
    {

        Label Label_Modulo = (Label)Master.FindControl("Label_Modulo");
        Label_Modulo.Text = " - Monitor Defeito";

        if (!IsPostBack)
        {
            Get_Agentes();
            //Get_Defeitos_Pendentes();
        }
    }

    //protected void GridView_Projeto_RowDataBound(object sender, GridViewRowEventArgs e)
    //{
    //    if (e.Row.RowType == DataControlRowType.DataRow)
    //    {
    //        e.Row.Attributes["onclick"] = Page.ClientScript.GetPostBackClientHyperlink(GridView_Projeto_, "Select$" + e.Row.RowIndex);
    //        e.Row.ToolTip = "Click to select this row.";
    //    }
    //}
    //protected void GridView_Projeto_SelectedIndexChanged(object sender, EventArgs e)
    //{
    //    foreach (GridViewRow row in GridView_Projeto_.Rows)
    //    {
    //        if (row.RowIndex == GridView_Projeto_.SelectedIndex)
    //        {
    //            row.BackColor = ColorTranslator.FromHtml("#A1DCF2");
    //            row.ToolTip = string.Empty;
    //        }
    //        else
    //        {
    //            row.BackColor = ColorTranslator.FromHtml("#FFFFFF");
    //            row.ToolTip = "Click to select this row.";
    //        }
    //    }
    //}
    protected void GridView_Projeto_RowDataBound1(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            // javascript function to call on row-click event
            e.Row.Attributes.Add("onClick", "javascript:void SelectRow(this);");
        }
    }
    protected void Button_Filtros_Click(object sender, EventArgs e)
    {
        //Panel_Status.Enabled = false;
        //Panel_Status.Visible = false;

        //Panel_Defeitos_Pendentes.Enabled = false;
        //Panel_Defeitos_Pendentes.Visible = false;

        //Panel_Filtro.Enabled = true;
        //Panel_Filtro.Visible = true;
    }
    protected void Button_Defeitos_Pendentes_Click(object sender, EventArgs e)
    {
        //Panel_Filtro.Enabled = false;
        //Panel_Filtro.Visible = false;

        //Panel_Status.Enabled = false;
        //Panel_Status.Visible = false;

        //Panel_Defeitos_Pendentes.Enabled = true;
        //Panel_Defeitos_Pendentes.Visible = true;

        //GridView_Defeitos_Pendentes.DataBind();
    }


    protected void backButton_Click(object sender, EventArgs e)
    {
        Response.Redirect("./Mobile_Monitor_Defeitos_Menu.aspx");
    }

    protected void GridView_Defeitos_Abertos_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {

            ImageButton ImageButtonSelecao = (ImageButton)e.Row.Cells[0].FindControl("ImageButtonSelecao");
            DataRowView dr = (DataRowView)e.Row.DataItem;

            ImageButtonSelecao.ImageUrl = "~/Imagens/" + dr["Farol"].ToString();

            //string myDataKey = dr["Id"];
      
            GridView GridView_Defeitos_Abertos = (GridView)sender;
       
            string Id = GridView_Defeitos_Abertos.DataKeys[e.Row.RowIndex].Value.ToString();

            int colCount = GridView_Defeitos_Abertos.Columns.Count;

            //string Id = GridView_Defeitos_Abertos.DataKeys[e.Row.RowIndex].Value.ToString();

            string[] Array = Id.Split('-');
            string subprojeto = Array[0];
            string entrega = Array[1];
            string defeito = Array[2];

            string x = e.Row.Cells[3].Text;

            if (e.Row.Cells[18].Text == "4")
            {
                e.Row.Cells[3].ForeColor = System.Drawing.Color.Purple;
            }

            if (e.Row.Cells[18].Text == "3")
            {
                e.Row.Cells[3].ForeColor = System.Drawing.Color.Red;
            }

            if (e.Row.Cells[18].Text == "2")
            {
                e.Row.Cells[3].ForeColor = System.Drawing.Color.Yellow;
            }

            if (e.Row.Cells[18].Text == "1")
            {
                e.Row.Cells[3].ForeColor = System.Drawing.Color.DarkGreen;
            }

            if (e.Row.Cells[11].Text == "ON RET" || e.Row.Cells[11].Text == "REJ." || e.Row.Cells[11].Text == "PEND RET")
            {
                e.Row.BackColor = System.Drawing.Color.LightGray;
            }


            #region COMENTÁRIOS

            string esquema = Connection.Get_String("select esquema from alm_projetos where subprojeto = '" + subprojeto + "' and entrega = '" + entrega + "'");

            string sql = @"
                    select
                        BG_DEV_COMMENTS as Comentarios
                    from
                      " + esquema + @".bug
                    where
                      BG_BUG_ID = " + defeito;

            string Comentarios = oALM_Connection.Get_String(sql);
            Comentarios = Comentarios.Replace(@"<br />", "").Replace("________________________________________", "");

            Label Label_Descricao = (Label)e.Row.Cells[9].FindControl("Label_Descricao");
            Label_Descricao.Text = Comentarios;

            #endregion

            #region TEMPO AGENTES

            string sqlTempoPorAgente = @"
                    select 
                        Encaminhado_Para,
                        Status,
                        round(cast((Tempo_Util) as float)/ 60,1) as Tempo_Util,
                        Dt_Ate
                    from 
                       alm_defeitos_tempos
                    where 
                       subprojeto = '" + subprojeto + @"' and 
                       entrega = '" + entrega + @"' and 
                       defeito = '" + defeito + @"' and
                       Status not in ('CLOSED', 'CANCELLED')
                    order by 
                       convert(datetime, Dt_Ate,5) desc";

            var DataTableAgent = Connection.Get_DataTable(sqlTempoPorAgente);

            //sHtml = sHtml + "<th>Agente</th>";
            //sHtml = sHtml + "<th>Status</th>";
            //sHtml = sHtml + "<th>Tempo_Util</th>";

            string sHtml = "<br>";
            sHtml = sHtml + "<b><span style='display:inline-block; width:170px'>Encam.Para</span></b>";
            sHtml = sHtml + "<b><span style='display:inline-block; width:150px'>Status</span></b>";
            sHtml = sHtml + "<b><span style='display:inline-block; width:150px'>Tempo Útil (h)</span></b>";
            sHtml = sHtml + "<b><span style='display:inline-block; width:100px'>Dt. Mud. Status </span></b><br>";
            sHtml = sHtml + "<hr>";

            foreach (DataRow row in DataTableAgent.Rows)
            {
       
                sHtml = sHtml + "<span style='display:inline-block; width:170px;'>" + row["Encaminhado_Para"] + "</span>";
        

                sHtml = sHtml + "<span style='display:inline-block; width:150px;'>" + row["Status"] + "</span>";
              
                sHtml = sHtml + "<span style='display:inline-block; width:150px;'>" + row["Tempo_Util"] + "</span>";
                sHtml = sHtml + "<span style='display:inline-block; width:100px;'>" + row["Dt_Ate"] + "</span><br>";
                sHtml = sHtml + "<hr>";
             
            }

            sHtml = sHtml + "<br>";

            Label Label_Titulo = (Label)e.Row.Cells[9].FindControl("Label_Titulo");
            Label_Titulo.Text = "<b>Tempo Por Agente (Histórico):</b>";

            Label Label_Agente_Historico = (Label)e.Row.Cells[9].FindControl("Label_Agente_Historico");
            Label_Agente_Historico.Text = sHtml;

            #endregion

            #region DEFEITOS RELACIONADOS

            HyperLink hyperLink = new HyperLink();
            hyperLink.ID = "hyperLink" + defeito;
            hyperLink.NavigateUrl = "JavaScript:div_def_relacionado_expandcollapse('" + subprojeto + "-" + entrega + '-' + defeito + "');";
            hyperLink.ToolTip = "Defeitos relacionados a este";

            Image img_def_relacionados = new Image();
            img_def_relacionados.ClientIDMode = ClientIDMode.Static;
            img_def_relacionados.ID = "img_def_relacionados" + subprojeto + "-" + entrega + '-' + defeito;
            img_def_relacionados.ImageUrl = "~/Imagens/bug-icon-disable.png";

            //img_def_relacionados.ImageAlign = ImageAlign.Bottom;
            //img_def_relacionados. = "vertical - align: middle; padding: 0px; margin: 0px; margin - left:1px";

            //img_def_relacionados.Style = "vertical - align: middle; padding: 0px; margin: 0px; margin - left:1px";
            img_def_relacionados.CssClass = "style_Ico_x2";

            hyperLink.Controls.Add(img_def_relacionados);

            e.Row.Cells[2].Controls.Add(hyperLink);

            string sqlDefeitosRelacionados = @"
                    select 
                        l.subprojeto, 
                        l.entrega, 
                        l.Tabela_id as Defeito,
                        (select nome from alm_defeitos d where d.subprojeto = l.subprojeto and d.entrega = l.entrega and d.defeito = l.tabela_id) as Defeito_Nome
                    from 
                        ALM_Defeitos_Links l
                    where 
                        l.tabela = 'BUG' and
                        l.subprojeto = '" + subprojeto + @"' and 
                        l.entrega = '" + entrega + @"' and 
                        l.defeito = " + defeito;

            string Links = "";
            var DataTable = Connection.Get_DataTable(sqlDefeitosRelacionados);


            //System.Web.UI.WebControls.Image Image_Defeitos_Relacionados = (System.Web.UI.WebControls.Image)e.Row.Cells[2].FindControl("Image_Defeitos_Relacionados");

            if (DataTable.Rows.Count > 0)
                img_def_relacionados.Visible = true;
            else
                img_def_relacionados.Visible = false;

            ////string nomeIco = "img_def_relacionados" + defeito.ToString();

            foreach (DataRow row in DataTable.Rows)
            {
                //var link = new HyperLink();
                //link.Text = row["Defeito"].ToString();
                //link.NavigateUrl = "";
                //Panel_Defeitos_Relacionados.Controls.Add(link)
                Links += "<a href='/Mobile_Status_Projeto_Dados_Defeito.aspx?subprojeto=" + row["subprojeto"].ToString() + "&entrega=" + row["entrega"].ToString() + "&defeito=" + row["Defeito"].ToString() + "' target='_blank' title='Consultar defeito'>" + row["Defeito"].ToString() + "</a> - " + row["Defeito_Nome"].ToString() + "</br>";
            }

            Session["Mobile_Status_Projeto_Dados_Defeito_Chamador"] = "Mobile_Monitor_Defeitos_Dados.aspx";

            Label Label_Defeitos_Relacionados = (Label)e.Row.Cells[0].FindControl("Label_Defeitos_Relacionados");

            ////System.Drawing.Image xx = (System.Drawing.Image)e.Row.FindControl(nomeIco);

            Label_Defeitos_Relacionados.Text = Links;

            #endregion

        }
    }

    private void Get_Defeitos_Pendentes(GridView gridView, string Agente_Atual)
    {
        Connection oConnection = new Connection("SGQ");

        string sql = @"
                select * 
	                    from( 
		                    select *,  
		                     case 
		                      when Farol =   '5-Selecao_Dedo_Roxo.png' then 'Roxo'
		                      when Farol =   '4-Selecao_Dedo_Vermelho.png' then 'Vermelho' 
		                      when Farol =   '2-Selecao_Dedo_Amarelo.png' then 'Amarelo'
		                      when Farol =   '1-Selecao_Dedo_Verde.png' then 'Verde'end as Cor
                        from
                            (
                            select
                                Id,
	                            case when Severidade = 'HIG'
		                            then
			                            case when round(Temp_ult_Ag,0) <= 1  then '1-Selecao_Dedo_Verde.png'
				                            when round(Temp_ult_Ag,0) >= 2 and round(Temp_ult_Ag,0) <= 3 then '2-Selecao_Dedo_Amarelo.png'
				                            when round(Temp_ult_Ag,0) >= 4 and round(Temp_ult_Ag,0) <= 5 then '4-Selecao_Dedo_Vermelho.png'
				                            when round(Temp_ult_Ag,0) >= 6 then '5-Selecao_Dedo_Roxo.png'
			                            end 
		                            when Severidade = 'MED'
		                            then
			                            case when round(Temp_ult_Ag,0) <= 4  then '1-Selecao_Dedo_Verde.png'
				                            when round(Temp_ult_Ag,0) >= 5 and round(Temp_ult_Ag,0) <= 7 then '2-Selecao_Dedo_Amarelo.png'
				                            when round(Temp_ult_Ag,0) >= 8 and round(Temp_ult_Ag,0) <= 10 then '4-Selecao_Dedo_Vermelho.png'
				                            when round(Temp_ult_Ag,0) >= 11 then '5-Selecao_Dedo_Roxo.png'
			                            end 
		                            when Severidade = 'LOW'
		                            then
			                            case when round(Temp_ult_Ag,0) <= 11  then '1-Selecao_Dedo_Verde.png'
				                            when round(Temp_ult_Ag,0) >= 12 and round(Temp_ult_Ag,0) <= 15 then '2-Selecao_Dedo_Amarelo.png'
				                            when round(Temp_ult_Ag,0) >= 16 and round(Temp_ult_Ag,0) <= 19 then '4-Selecao_Dedo_Vermelho.png'
				                            when round(Temp_ult_Ag,0) >= 20 then '5-Selecao_Dedo_Roxo.png'
			                            end 
	                            end as Farol,
	                            Subprojeto,
	                            Entrega,
                                convert(varchar, Subprojeto) + ' ' + convert(varchar, Entrega) as Projeto,
	                            Defeito,
	                            Nome,
	                            Ciclo,
	                            Abertura,
	                            Sistema,
	                            Origem,
	                            Status,
                                (case 
		                            when Fila in('LIDER TECNICO','RESP TECNICO', 'SOA – OI','INFOR. - INT. - OI','NDS – OI','TDM - OI') then 'CSOL'
		                            when Fila = 'GA - OI' then 'GA - OI'
		                            when Fila in ('SISRAF - ARRECADAÇÃO - IBM','SISRAF - CONTABILIZAÇÃO - IBM', 'INFOR. - INT. - IBM', 'MEDIAÇÃO MÓVEL - MM - IBM','SOM - SERVICE ORDER MANAGEMENT - IBM','SISRAF - APROPRIAÇÃO - IBM','SISRAF - ATENDIMENTO DE CONTA - IBM','INFOR. - DW - IBM','FABRICA DE TESTE – IBM', 'FGC - FATURAMENTO - IBM', 'SISRAF - FATURAMENTO - IBM','MEDIAÇÃO FIXA - MM - IBM','SISRAF - MPN - IBM','SISRAF - PARCELAMENTO - IBM' ) then 'IBM'
		                            when Fila in('E-CHANNEL - ACC','CLICK - MUA - ACC','(OI R2) CLARIFY - AMBIENTE OPEN - ACC','SISRAF - CADASTRO DE FATURAMENTO - ACC','INFOR. - INT. - ACC','OSVC – ACC','CLICK - PO - ACC') then 'ACC'
		                            when Fila in('VAS – PTI','VASPROXY – PTI','LISA – PTI','PORTAL M2M – PTI','PORTAL VAS – PTI') then 'PTI'
		                            when Fila in('OSVC – MAKSEN') then 'MAKSEN'
		                            when Fila in('PW.SATI - SOLUÇÕES FISCAIS - SONDA PROCWORK') then 'SONDA PROCWORK'
		                            when Fila in('PRINTCENTER - ÁREA DE NEGÓCIOS') then 'ÁREA DE NEGÓCIOS'
		                            when Fila in('LIDER FUNCIONAL','LÍDER FUNCIONAL') then 'LIDER FUNCIONAL'
		                            when Fila in('OI PLAY – SMART BOX') then 'SMART BOX'
		                            when charindex('-', Fila) > 0 then substring(Fila,charindex('-', Fila)+2,10)
		                            else Fila
	                            end) as Agente,
	                            Fila,
                                (case 
	                                  when Severidade = 'HIG' then 1
	                                  when Severidade = 'MED' then 2
	                                  else 3
	                            end) as Severidade_nivel,
	                            Severidade,
	                            [Agind(h)],
				                Temp_ult_Ag,
                                Aging_ult_ag_soma,
                                Ping_Pong,
                                Qtd_CTs_Impactados,
                                Risco_Projeto
                            from
	                            (
		                            select 
                                        Subprojeto + '-' +Entrega + '-' + convert(varchar, Defeito) as Id,
			                            cast(substring(d.Subprojeto,4,8) as int) as Subprojeto,
			                            cast(substring(d.Entrega,8,8) as int) as Entrega,
			                            Defeito,
			                            d.Nome,
			                            Ciclo,
			                            Dt_Inicial as Abertura,
			                            replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(Sistema_Defeito,'ENGENHARIA','ENG'),'INFORMACIONAL','INF.'),'INFORMÁTICA','INFOR.'),'FATURAMENTO','FAT.'),'ACCENTURE','ACC'),'INTEGRAÇÃO','INT.'),'REQUERIMENTO','REQ.'),'MARKETING','MKT'),'METATRON','META'),'SISTEMAS','SIST.') as Sistema,
			                            replace(replace(replace(replace(replace(Origem,'DESENHO DA SOLUÇÃO','DES.SOL'),'IMPROCEDENTE','IMPROC.'),'CONSTRUÇÃO','CONST.'),'AMBIENTE','AMB.'),'PRODUÇÃO','PROD.') as Origem,
			                            replace(replace(replace(replace(replace(replace(Status_Atual,'IN_PROGRESS','IN PRG'),'PENDENT (PROGRESS)','PEND PRG'),'PENDENT (RETEST)','PEND RET'),'ON_RETEST','ON RET'),'REJECTED','REJ.'),'MIGRATE','MIG.') as Status,
			                            replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(Encaminhado_Para,'ENGENHARIA','ENG'),'INFORMACIONAL','INF.'),'INFORMÁTICA','INFOR.'),'RESPONSAVEL','RESP'),'ACCENTURE','ACC'),'INTEGRAÇÃO','INT.'),'REQUERIMENTO','REQ.'),'MARKETING','MKT'),'METATRON','META'),'SISTEMAS','SIST.') as Fila,
			                            substring(Severidade,3,3) as Severidade,
			                            round(
				                            cast(
						                            (select Sum(Tempo_Util) 
						                            from ALM_Defeitos_Tempos dt WITH (NOLOCK)
						                            where dt.Subprojeto = d.Subprojeto and 
								                            dt.Entrega = d.Entrega and 
								                            dt.Defeito = d.Defeito)
				                            as float) / 60, 1
			                            ) as [Agind(h)],
						                round(
				                            cast(
								                (select sum(Teste)	
													from(
													select *,
													rank() OVER (ORDER BY convert(datetime, Data, 5) desc) as id2
														from(
														select
																*,     
																
																case when Id = 1 then tempo_util
																else
																 (case when Id >=
																			(
																			  select top 1 id
																
																			   from
																				(
																				select 
																					rank() OVER (ORDER BY convert(datetime, dt_ate, 5) desc) as id,
																					DT_ATE as Data,
																					status, 
																					encaminhado_para, 
																					tempo_util
																				from
																					alm_defeitos_tempos dt
																				where
																					 dt.Subprojeto = d.Subprojeto and 
																							dt.Entrega = d.Entrega and 
																							dt.Defeito = d.Defeito
																	
																				) a
																					where  
																					a.encaminhado_para = 
																						(select top 1
																								encaminhado_para
																						from
																								alm_defeitos_tempos dt
																						where
																						 dt.Subprojeto = d.Subprojeto and 
																							  dt.Entrega = d.Entrega and 
																							  dt.Defeito = d.Defeito
																			 
																						order by
																								convert(datetime, dt_ate, 5) desc) and
																								status in ('REJECTED','ON_RETEST', 'PENDENT (RETEST)') )
																	then '' 
																	else tempo_util end)
																	end as Teste
		
														from
																(
																select 
																	rank() OVER (ORDER BY convert(datetime, dt_ate, 5) desc) as id,
																	dt_ate as Data,
																	status, 
																	encaminhado_para, 
																	tempo_util
																from
																	alm_defeitos_tempos dt
																where
																	 dt.Subprojeto = d.Subprojeto and 
								                                          dt.Entrega = d.Entrega and 
								                                          dt.Defeito = d.Defeito
																
																) a
														where  
																a.encaminhado_para = 
																	(select top 1
																			encaminhado_para
																	from
																			alm_defeitos_tempos dt
																	where
																			 dt.Subprojeto = d.Subprojeto and 
																					dt.Entrega = d.Entrega and 
																					dt.Defeito = d.Defeito
																			
																	order by
																			convert(datetime, dt_ate, 5) desc))b)c
																			where id <= id2)
										                as float) / 60, 1) as Temp_ult_Ag,
		                                  	round(
                                                   cast(
														(select 
																   sum(tempo_util)
															from
																   (
      
																		 select 
																				rank() OVER (ORDER BY convert(datetime, dt_ate, 5) desc) as id,
																				dt_ate,
																				status, 
																				encaminhado_para, 
																				tempo_util
																		 from
																				alm_defeitos_tempos
																		 where
																				  subprojeto = d.subprojeto and
																					Entrega = d.Entrega and 
																					Defeito = d.Defeito and
																				status not in ('REJECTED', 'ON_RETEST', 'PENDENT (RETEST)')
																		 ) a
																   where  
																		 a.encaminhado_para = 
																				(select top 1
																					   encaminhado_para
																				from
																					   alm_defeitos_tempos
																				where
																					   subprojeto = d.subprojeto and
																					   Entrega = d.Entrega and 
																					   Defeito = d.Defeito and
																					   status not in ('REJECTED', 'ON_RETEST', 'PENDENT (RETEST)')
																				order by
																					   convert(datetime, dt_ate, 5) desc) )
																					   as float)/60,1
																					   ) as Aging_ult_ag_soma,
			                            d.Ping_Pong,
                                        d.Qtd_CTs_Impactados,
                                       (select Risco from (select Subprojeto, Entrega, Risco, release_mes from SGQ_Releases_Entregas re  where id in (select max(id) as idMax from [SGQ_Releases_Entregas] where Release_ano = 2017 and risco <> '' group by Subprojeto+Entrega) and re.Subprojeto = d.Subprojeto and re.Entrega = d.Entrega)aux) as Risco_Projeto
		                            from 
			                            ALM_Defeitos d WITH (NOLOCK)
			                            left join BITI_Subprojetos sp WITH (NOLOCK)
				                            on sp.id = d.subprojeto
		                            where
			                            {Condicao_Filas}
			                            {Condicao_Status_Dev}
			                            {Condicao_Projeto}
			                            status_atual not in('CLOSED', 'CANCELLED') or
								        {Condicao_Filas}
			                            {Condicao_Status_Test} 
			                            {Condicao_Projeto}
			                            status_atual not in('CLOSED', 'CANCELLED')
	                            ) Aux
                            ) aux2
                        where
                            Agente = '@Agente_Atual' ) aux3
                            where
                                {Condicao_Farois} and
                                defeito <> (case when Subprojeto = '5841' and Entrega = '5542' then 33 else 0 end)
                       order by
						14,
						case when 
                            Fila in ('LIDER TECNICO', 'RESP TECNICO') then Sistema
							END,
                        Risco_Projeto desc,
						15,
						18 desc";

        sql = Alterar_Paramentros_Sql(sql).Replace("@Agente_Atual", Agente_Atual);

        gridView.DataSource = oConnection.Get_DataTable(sql);
        gridView.DataBind();

        oConnection.Dispose();
    }
  

    private void Get_Agentes()
    {
        Connection oConnection = new Connection("SGQ");

        string sql = @"
         select distinct (case
                     when Fila in('LIDER TECNICO',
                                  'RESP TECNICO',
                                  'SOA – OI',
                                  'INFOR. - INT. - OI',
                                  'NDS – OI',
                                  'TDM - OI') then 'CSOL'
                     when Fila = 'GA - OI' then 'GA - OI'
                     when Fila in ('SISRAF - ARRECADAÇÃO - IBM',
                                   'SISRAF - CONTABILIZAÇÃO - IBM',
                                   'INFOR. - INT. - IBM',
                                   'MEDIAÇÃO MÓVEL - MM - IBM',
                                   'SOM - SERVICE ORDER MANAGEMENT - IBM',
                                   'SISRAF - APROPRIAÇÃO - IBM',
                                   'SISRAF - ATENDIMENTO DE CONTA - IBM',
                                   'INFOR. - DW - IBM',
                                   'FABRICA DE TESTE – IBM',
                                   'FGC - FATURAMENTO - IBM',
                                   'SISRAF - FATURAMENTO - IBM',
                                   'MEDIAÇÃO FIXA - MM - IBM',
                                   'SISRAF - MPN - IBM',
                                   'SISRAF - PARCELAMENTO - IBM') then 'IBM'
                     when Fila in('E-CHANNEL - ACC',
                                  'CLICK - MUA - ACC',
                                  '(OI R2) CLARIFY - AMBIENTE OPEN - ACC',
                                  'SISRAF - CADASTRO DE FATURAMENTO - ACC',
                                  'INFOR. - INT. - ACC',
                                  'OSVC – ACC',
                                  'CLICK - PO - ACC',
                                  '(OI R2) DATA QUALITY – ACC') then 'ACC'
                     when Fila in('VAS – PTI',
                                  'VASPROXY – PTI',
                                  'LISA – PTI',
                                  'PORTAL M2M – PTI',
                                  'PORTAL VAS – PTI') then 'PTI'
                     when Fila in('OSVC – MAKSEN') then 'MAKSEN'
                     when Fila in('PW.SATI - SOLUÇÕES FISCAIS - SONDA PROCWORK') then 'SONDA PROCWORK'
                     when Fila in('PRINTCENTER - ÁREA DE NEGÓCIOS') then 'ÁREA DE NEGÓCIOS'
                     when Fila in('LIDER FUNCIONAL',
                                  'LÍDER FUNCIONAL') then 'LIDER FUNCIONAL'
                     when Fila in('OI PLAY – SMART BOX') then 'SMART BOX'
                     when charindex('-', Fila) > 0 then substring(Fila,charindex('-', Fila)+2,10)
                     else Fila
                 end) as Agente,
                count(*) as Qte_Defeitos_Abertos
from
  (select case
              when Farol = '5-Selecao_Dedo_Roxo.png' then 'Roxo'
              when Farol = '4-Selecao_Dedo_Vermelho.png' then 'Vermelho'
              when Farol = '2-Selecao_Dedo_Amarelo.png' then 'Amarelo'
              when Farol = '1-Selecao_Dedo_Verde.png' then 'Verde'
          end as Cor,
          *
   from
     ( select case
                  when Severidade = 'HIG' then case
                                                   when round(Temp_ult_Ag,0) <= 1 then '1-Selecao_Dedo_Verde.png'
                                                   when round(Temp_ult_Ag,0) >= 2
                                                        and round(Temp_ult_Ag,0) <= 3 then '2-Selecao_Dedo_Amarelo.png'
                                                   when round(Temp_ult_Ag,0) >= 4
                                                        and round(Temp_ult_Ag,0) <= 5 then '4-Selecao_Dedo_Vermelho.png'
                                                   when round(Temp_ult_Ag,0) >= 6 then '5-Selecao_Dedo_Roxo.png'
                                               end
                  when Severidade = 'MED' then case
                                                   when round(Temp_ult_Ag,0) <= 4 then '1-Selecao_Dedo_Verde.png'
                                                   when round(Temp_ult_Ag,0) >= 5
                                                        and round(Temp_ult_Ag,0) <= 7 then '2-Selecao_Dedo_Amarelo.png'
                                                   when round(Temp_ult_Ag,0) >= 8
                                                        and round(Temp_ult_Ag,0) <= 10 then '4-Selecao_Dedo_Vermelho.png'
                                                   when round(Temp_ult_Ag,0) >= 11 then '5-Selecao_Dedo_Roxo.png'
                                               end
                  when Severidade = 'LOW' then case
                                                   when round(Temp_ult_Ag,0) <= 11 then '1-Selecao_Dedo_Verde.png'
                                                   when round(Temp_ult_Ag,0) >= 12
                                                        and round(Temp_ult_Ag,0) <= 15 then '2-Selecao_Dedo_Amarelo.png'
                                                   when round(Temp_ult_Ag,0) >= 16
                                                        and round(Temp_ult_Ag,0) <= 19 then '4-Selecao_Dedo_Vermelho.png'
                                                   when round(Temp_ult_Ag,0) >= 20 then '5-Selecao_Dedo_Roxo.png'
                                               end
              end as Farol,
              *
      from
        ( select Subprojeto + '-' +Entrega + '-' + convert(varchar, Defeito) as Id,
                 cast(substring(d.Subprojeto,4,8) as int) as Subprojeto,
                 cast(substring(d.Entrega,8,8) as int) as Entrega,
                 Defeito,
                 d.Nome,
                 Ciclo,
                 Dt_Inicial as Abertura,
                 replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(Sistema_Defeito,'ENGENHARIA','ENG'),'INFORMACIONAL','INF.'),'INFORMÁTICA','INFOR.'),'FATURAMENTO','FAT.'),'ACCENTURE','ACC'),'INTEGRAÇÃO','INT.'),'REQUERIMENTO','REQ.'),'MARKETING','MKT'),'METATRON','META'),'SISTEMAS','SIST.') as Sistema,
                 replace(replace(replace(replace(replace(Origem,'DESENHO DA SOLUÇÃO','DES.SOL'),'IMPROCEDENTE','IMPROC.'),'CONSTRUÇÃO','CONST.'),'AMBIENTE','AMB.'),'PRODUÇÃO','PROD.') as Origem,
                 replace(replace(replace(replace(replace(replace(Status_Atual,'IN_PROGRESS','IN PRG'),'PENDENT (PROGRESS)','PEND PRG'),'PENDENT (RETEST)','PEND RET'),'ON_RETEST','ON RET'),'REJECTED','REJ.'),'MIGRATE','MIG.') as Status,
                 replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(Encaminhado_Para,'ENGENHARIA','ENG'),'INFORMACIONAL','INF.'),'INFORMÁTICA','INFOR.'),'RESPONSAVEL','RESP'),'ACCENTURE','ACC'),'INTEGRAÇÃO','INT.'),'REQUERIMENTO','REQ.'),'MARKETING','MKT'),'METATRON','META'),'SISTEMAS','SIST.') as Fila,
                 substring(Severidade,3,3) as Severidade,
                 round( cast(
                               (select Sum(Tempo_Util)
                                from ALM_Defeitos_Tempos dt with (NOLOCK)
                                where dt.Subprojeto = d.Subprojeto
                                  and dt.Entrega = d.Entrega
                                  and dt.Defeito = d.Defeito) as float) / 60, 1 ) as [Agind(h)],
                 round( cast(
                               (select sum(Teste) from
                                  ( select *, case
                                                  when Id = 1 then tempo_util
                                                  else (case
                                                            when Id >=
                                                                   ( select top 1 id
                                                                    from
                                                                      ( select rank() OVER (
                                                                                            order by convert(datetime, dt_ate, 5) desc) as id, DT_ATE as data, status, encaminhado_para, tempo_util
                                                                       from alm_defeitos_tempos dt
                                                                       where dt.Subprojeto = d.Subprojeto
                                                                         and dt.Entrega = d.Entrega
                                                                         and dt.Defeito = d.Defeito ) a
                                                                    where a.encaminhado_para =
                                                                        (select top 1 encaminhado_para
                                                                         from alm_defeitos_tempos dt
                                                                         where dt.Subprojeto = d.Subprojeto
                                                                           and dt.Entrega = d.Entrega
                                                                           and dt.Defeito = d.Defeito
                                                                         order by convert(datetime, dt_ate, 5) desc)
                                                                      and status in ('REJECTED','ON_RETEST', 'PENDENT (RETEST)') ) then ''
                                                            else tempo_util
                                                        end)
                                              end as Teste
                                   from
                                     ( select rank() OVER (
                                                           order by convert(datetime, dt_ate, 5) desc) as id, dt_ate as data, status, encaminhado_para, tempo_util
                                      from alm_defeitos_tempos dt
                                      where dt.Subprojeto = d.Subprojeto
                                        and dt.Entrega = d.Entrega
                                        and dt.Defeito = d.Defeito ) a
                                   where a.encaminhado_para =
                                       (select top 1 encaminhado_para
                                        from alm_defeitos_tempos dt
                                        where dt.Subprojeto = d.Subprojeto
                                          and dt.Entrega = d.Entrega
                                          and dt.Defeito = d.Defeito
                                        order by convert(datetime, dt_ate, 5) desc))b) as float) / 60, 1) as Temp_ult_Ag,
                 d.Ping_Pong,
                 d.Qtd_CTs_Impactados
         from ALM_Defeitos d with (NOLOCK)
         left join BITI_Subprojetos sp with (NOLOCK) on sp.id = d.subprojeto
         where      {Condicao_Filas}
			        {Condicao_Status_Dev}
			        {Condicao_Projeto} 
			        status_atual not in('CLOSED', 'CANCELLED') or
				    {Condicao_Filas}
			        {Condicao_Status_Test} 
			        {Condicao_Projeto} 
			        status_atual not in('CLOSED', 'CANCELLED') ) Aux ) Aux2 ) Aux3
where
{Condicao_Farois} and
 defeito <> (case when Subprojeto = '5841' and Entrega = '5542' then 33 else 0 end)
group by (case
              when Fila in('LIDER TECNICO',
                           'RESP TECNICO',
                           'SOA – OI',
                           'INFOR. - INT. - OI',
                           'NDS – OI',
                           'TDM - OI') then 'CSOL'
              when Fila = 'GA - OI' then 'GA - OI'
              when Fila in ('SISRAF - ARRECADAÇÃO - IBM',
                            'SISRAF - CONTABILIZAÇÃO - IBM',
                            'INFOR. - INT. - IBM',
                            'MEDIAÇÃO MÓVEL - MM - IBM',
                            'SOM - SERVICE ORDER MANAGEMENT - IBM',
                            'SISRAF - APROPRIAÇÃO - IBM',
                            'SISRAF - ATENDIMENTO DE CONTA - IBM',
                            'INFOR. - DW - IBM',
                            'FABRICA DE TESTE – IBM',
                            'FGC - FATURAMENTO - IBM',
                            'SISRAF - FATURAMENTO - IBM',
                            'MEDIAÇÃO FIXA - MM - IBM',
                            'SISRAF - MPN - IBM',
                            'SISRAF - PARCELAMENTO - IBM') then 'IBM'
              when Fila in('E-CHANNEL - ACC',
                           'CLICK - MUA - ACC',
                           '(OI R2) CLARIFY - AMBIENTE OPEN - ACC',
                           'SISRAF - CADASTRO DE FATURAMENTO - ACC',
                           'INFOR. - INT. - ACC',
                           'OSVC – ACC',
                           'CLICK - PO - ACC',
                           '(OI R2) DATA QUALITY – ACC') then 'ACC'
              when Fila in('VAS – PTI',
                           'VASPROXY – PTI',
                           'LISA – PTI',
                           'PORTAL M2M – PTI',
                           'PORTAL VAS – PTI') then 'PTI'
              when Fila in('OSVC – MAKSEN') then 'MAKSEN'
              when Fila in('PW.SATI - SOLUÇÕES FISCAIS - SONDA PROCWORK') then 'SONDA PROCWORK'
              when Fila in('PRINTCENTER - ÁREA DE NEGÓCIOS') then 'ÁREA DE NEGÓCIOS'
              when Fila in('LIDER FUNCIONAL',
                           'LÍDER FUNCIONAL') then 'LIDER FUNCIONAL'
              when Fila in('OI PLAY – SMART BOX') then 'SMART BOX'
              when charindex('-', Fila) > 0 then substring(Fila,charindex('-', Fila)+2,10)
              else Fila
          end)
        order by 1";

        sql = Alterar_Paramentros_Sql(sql);

        GridView_Agentes.DataSource = oConnection.Get_DataTable(sql);
        GridView_Agentes.DataBind();

        oConnection.Dispose();
    }

    private string Alterar_Paramentros_Sql(string sql)
    {
        if (Session["Lista_Filas"] == null)
            Session["Lista_Filas"] = "";

        if (Session["Lista_Filas"].ToString() != "")
            sql = sql.Replace("{Condicao_Filas}", "d.Encaminhado_Para in (" + Session["Lista_Filas"].ToString() + ") and ");
        else
            sql = sql.Replace("{Condicao_Filas}", "1=1 and ");

        if (Session["Lista_Status_Dev"] == null)
            Session["Lista_Status_Dev"] = "";

        if (Session["Lista_Status_Dev"].ToString() != "")
            sql = sql.Replace("{Condicao_Status_Dev}", "d.Status_Atual in (" + Session["Lista_Status_Dev"].ToString() + ") and ");
        else
            sql = sql.Replace("{Condicao_Status_Dev}", "d.Status_Atual in ('') and ");

        if (Session["Lista_Status_Test"] == null)
            Session["Lista_Status_Test"] = "";

        if (Session["Lista_Status_Test"].ToString() != "")
            sql = sql.Replace("{Condicao_Status_Test}", "d.Status_Atual in (" + Session["Lista_Status_Test"].ToString() + ") and ");
        else
            sql = sql.Replace("{Condicao_Status_Test}", "d.Status_Atual in ('') and ");

        if (Session["Lista_Farois"] == null)
            Session["Lista_Farois"] = "";

        if (Session["Lista_Farois"].ToString() != "")
            sql = sql.Replace("{Condicao_Farois}", "Cor in (" + Session["Lista_Farois"].ToString() + ") ");
        else
            sql = sql.Replace("{Condicao_Farois}", "1=1");

        if (Session["Lista_Projetos"] == null)
            Session["Lista_Projetos"] = "";

        if (Session["Lista_Projetos"].ToString() != "")
            sql = sql.Replace("{Condicao_Projeto}", "d.Subprojeto + '-' + d.Entrega in (" + Session["Lista_Projetos"].ToString() + ") and ");
        else
            sql = sql.Replace("{Condicao_Projeto}", "1=1 and ");

        return sql;
    }

    protected void GridView_Defeitos_Abertos_SelectedIndexChanged(object sender, EventArgs e)
    {
        GridView GridView_Defeitos_Abertos = (GridView)sender;
        int Indice_linha = GridView_Defeitos_Abertos.SelectedRow.RowIndex;
        string Id = GridView_Defeitos_Abertos.DataKeys[Indice_linha].Value.ToString();
        string[] Array = Id.Split('-');
        string subprojeto = Array[0];
        string entrega = Array[1];
        string defeito = Array[2];

        Session["subprojeto"] = Array[0];
        Session["entrega"] = Array[1];
        Session["defeito"] = Array[2];

        //Session["subprojeto"] = "PRJ" + GridView_Defeitos_Abertos.SelectedRow.Cells[1].Text.ToString().PadLeft(8, '0');
        //Session["entrega"] = "ENTREGA" + GridView_Defeitos_Abertos.SelectedRow.Cells[2].Text.ToString().PadLeft(8, '0');
        //Session["defeito"] = GridView_Defeitos_Abertos.SelectedRow.Cells[3].Text.ToString();

        Session["Mobile_Status_Projeto_Dados_Defeito_Chamador"] = "Mobile_Monitor_Defeitos_Dados.aspx";

        Response.Redirect("./Mobile_Status_Projeto_Dados_Defeito.aspx");
    }

    protected void GridView_Agentes_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            string Agente_Atual = GridView_Agentes.DataKeys[e.Row.RowIndex].Value.ToString();

            GridView GridView_Defeitos_Abertos = (GridView)e.Row.Cells[0].FindControl("GridView_Defeitos_Abertos");
            if (GridView_Defeitos_Abertos != null)
                Get_Defeitos_Pendentes(GridView_Defeitos_Abertos, Agente_Atual);
        }
    }

    //private string ConvertSortDirectionToSql(SortDirection sortDirection)
    //{
    //    string newSortDirection = String.Empty;

    //    switch (sortDirection)
    //    {
    //        case SortDirection.Ascending:
    //            newSortDirection = "ASC";
    //            break;

    //        case SortDirection.Descending:
    //            newSortDirection = "DESC";
    //            break;
    //    }

    //    return newSortDirection;
    //}

    //protected void GridView_Defeitos_Abertos_Sorting(object sender, GridViewSortEventArgs e)
    //{
    //        DataTable dataTable = GridView_Defeitos_Abertos.DataSource as DataTable;

    //    if (dataTable != null)
    //    {
    //        DataView dataView = new DataView(dataTable);
    //        dataView.Sort = e.SortExpression + " " + ConvertSortDirectionToSql(e.SortDirection);

    //        GridView_Defeitos_Abertos.DataSource = dataView;
    //        GridView_Defeitos_Abertos.DataBind();
    //    }
    //}
}
