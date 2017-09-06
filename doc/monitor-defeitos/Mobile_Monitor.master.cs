using System;
using System.Collections.Generic;

public partial class Mobile : System.Web.UI.MasterPage
{
    private object random;

    protected void Page_Load(object sender, EventArgs e)
    {
        var Cores = new List<string> { "~/Imagens/Logo_Laranja.png", "~/Imagens/Logo_Verde.png"};
        Random rnd = new Random();
        Image_Logo.ImageUrl = Cores[rnd.Next(0, Cores.Count)];
        //Label_Cabecalho.Text = Session["Cabecalho"].ToString();
    }
}
