<%@ Page Title="" Language="C#" MasterPageFile="~/Mobile.master" AutoEventWireup="true" CodeFile="Mobile_Monitor_Defeitos_Menu.aspx.cs" Inherits="Mobile" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="row green-text">
        <ul class="collapsible green-text" data-collapsible="accordion">
            <li>
                <div class="collapsible-header green-text" style="padding: 0px; margin: 0px; margin-top: 5px; padding-left: 5px;">
                    <b>Filtro Por Agente:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                    <asp:CheckBox ID="CheckBox_Todas_Filas" runat="server" Text="Todos" AutoPostBack="True" OnCheckedChanged="CheckBox_Todas_Filas_CheckedChanged" />

                    <div style="margin-left: 15px">
                        <asp:Label ID="Label_Filas_Selecionadas" runat="server" Font-Size="X-Small" Text=""></asp:Label>
                    </div>
                </div>

                <div class="collapsible-body">
                    <div class="row">
                        <div class="col s12">
                            <div class="mGrid green-text center-align">
                                <asp:CheckBoxList 
                                    ID="CheckBoxList_Fila" 
                                    runat="server" 
                                    Font-Names="arial" 
                                    CssClass="font-size:5" 
                                    DataSourceID="SqlDataSource_Fila" 
                                    DataTextField="Nome" 
                                    DataValueField="Nome" 
                                    RepeatColumns="2" 
                                    CellPadding="0" 
                                    CellSpacing="0" 
                                    Height="5px">
                                </asp:CheckBoxList>
                                <br />
                                <asp:Button
                                    ID="Button_Confirmar_Lista_De_Fila"
                                    Height="25px"
                                    CssClass="waves-effect waves-circle btn td-left green"
                                    runat="server"
                                    OnClick="Button_Confirmar_Lista_De_Fila_Click"
                                    Text="Confirmar"
                                    Width="70px"
                                    Font-Bold="True"
                                    Font-Size="X-Small" />
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div class="collapsible-header green-text" style="padding: 0px; margin: 0px; margin-top: 5px; padding-left: 5px;">
                    <b>Filtro Por Status:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                    <asp:CheckBox ID="CheckBox_Todos_Status_Dev" runat="server" Text="Todos(Dev)" AutoPostBack="True" OnCheckedChanged="CheckBox_Todos_Status_Dev_CheckedChanged" />

                    <asp:CheckBox ID="CheckBox_Todos_StatusTest" runat="server" Text="Todos(Test)" AutoPostBack="True" OnCheckedChanged="CheckBox_Todos_Status_Test_CheckedChanged" />

                    <div style="margin-left: 15px">
                        <asp:Label ID="Label_Status_Selecionados_Dev" runat="server" Font-Size="X-Small"></asp:Label>
                        <asp:Label ID="Label_Status_Selecionados_Test" runat="server" Font-Size="X-Small"></asp:Label>
                    </div>
                </div>

                  <div class="collapsible-body">
                    <div class="row">
                        <div class="col s12 left-align" style="padding: 0px; margin: 0px; margin-top: 5px; padding-left: 5px;">
                            <asp:Label ID="LabelDev" runat="server" Text="Desenvolvimento:" Font-Italic="True" Font-Overline="False" Font-Underline="True"></asp:Label>
                            <div class="mGrid green-text center-align">
                                <asp:CheckBoxList 
                                    ID="CheckBoxList_Status_Dev" 
                                    runat="server" 
                                    Font-Names="arial" 
                                    CssClass="font-size:3"
                                    DataSourceID="SqlDataSource_Status_Dev" 
                                    DataTextField="Nome" 
                                    DataValueField="Nome" 
                                    RepeatColumns="1" 
                                    CellPadding="0" 
                                    CellSpacing="0" 
                                    Height="3px" 
                                    OnSelectedIndexChanged="CheckBoxList_Status_SelectedIndexChanged">
                                </asp:CheckBoxList> 
                                 <br />
                                <div class="col s12 left-align" style="padding: 0px; margin: 0px; margin-top: 5px; padding-left: 5px;">
                                   <asp:Label ID="LabelTest" runat="server" Text="Teste:" Font-Italic="True" Font-Underline="True"></asp:Label>
                                </div>
                                <asp:CheckBoxList 
                                    ID="CheckBoxList_Status_Test" 
                                    runat="server" 
                                    Font-Names="arial" 
                                    CssClass="font-size:3" 
                                    DataSourceID="SqlDataSource_Status_Test" 
                                    DataTextField="Nome" 
                                    DataValueField="Nome" 
                                    RepeatColumns="1" 
                                    CellPadding="0" 
                                    CellSpacing="0" 
                                    Height="3px" 
                                    OnSelectedIndexChanged="CheckBoxList_Status_SelectedIndexChanged">
                                </asp:CheckBoxList>
                                <br />
                                <asp:Button
                                    ID="Button_Confirmar_Lista_De_Status"
                                    Height="25px"
                                    CssClass="waves-effect waves-circle btn td-left green"
                                    runat="server"
                                    OnClick="Button_Confirmar_Lista_De_Status_Click"
                                    Text="Confirmar"
                                    Width="70px"
                                    Font-Bold="True"
                                    Font-Size="X-Small" />
                            </div>
                        </div>
                    </div>
                </div>
            
            </li>
             <li>
                <div class="collapsible-header green-text" style="padding: 0px; margin: 0px; margin-top: 5px; padding-left: 5px;">
                    <b>Filtro Por SLA:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                    <asp:CheckBox ID="CheckBox_Todos_Farois" runat="server" Text="Todos" AutoPostBack="True" OnCheckedChanged="CheckBox_Todos_Farois_CheckedChanged" />

                    <div style="margin-left: 15px">
                        <asp:Label ID="Label_Farois_Selecionados" runat="server" Font-Size="Small" Text=""></asp:Label>
                    </div>
                </div>

                <div class="collapsible-body">
                    <div class="row">
                        <div class="col s12">
                            <div class="mGrid green-text center-align">
                                <asp:CheckBoxList 
                                    ID="CheckBoxList_Farol" 
                                    runat="server" 
                                    Font-Names="arial" 
                                    CssClass="font-size:5" 
                                    DataSourceID="SqlDataSource_Farol" 
                                    DataTextField="Farol_Cor" 
                                    DataValueField="Farol_Cor" 
                                    RepeatColumns="1" 
                                    CellPadding="0" 
                                    CellSpacing="0" 
                                    Height="5px">
                                </asp:CheckBoxList>
                                <br />
                                <div class="mGrid green-text center-align"  style="font-size: 12px;">
                                <b>Legenda:</b><br />
                                    &nbsp;[VERDE] -&gt; Inicio do SLA<br />
                                    &nbsp;&nbsp;&nbsp; [AMARELO] -&gt; Dentro do SLA<br />
                                                                    [VERMELHO] -&gt; SLA Recentemente Estourado<br />
                                                                    [ROXO] -&gt; SLA Estourado<br />
                                    </div>
                                <asp:Button
                                    ID="Button_Confirmar_Lista_De_Farol"
                                    Height="25px"
                                    CssClass="waves-effect waves-circle btn td-left green"
                                    runat="server"
                                    
                                    Text="Confirmar"
                                    Width="70px"
                                    Font-Bold="True"
                                    Font-Size="X-Small" OnClick="Button_Confirmar_Lista_De_Farol_Click" />
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        </ul>

        <div class="col s12" style="padding: 0px; margin: 0px; margin-top: 5px; padding-left: 1px;">
            <asp:Button ID="Button_Projetos" runat="server" BorderStyle="None" Text="Filtro Por Projeto:" Font-Size="11pt" BackColor="Transparent" OnClick="Button_Projetos_Click" Font-Bold="True" ForeColor="#4CAF50" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <asp:CheckBox ID="CheckBox_Todos_Projetos" runat="server" Text="Todos" AutoPostBack="True" OnCheckedChanged="CheckBox_Todos_Projetos_CheckedChanged" />

            <div style="margin-left: 15px; line-height: normal">
                <asp:Label ID="Label_Projetos_Selecionados" runat="server" Font-Size="X-Small" Text=""></asp:Label>
            </div>

            <asp:Panel ID="Panel_Projetos" runat="server" Visible="False">
                <div style="padding-left: 3%; padding-right: 3%" class="center-on-small-only">
                    <div class="col s12 left-align">
                        <div class="col s6 m4 l4 left-align">
                            <h6 class="green-text">Class:
                                <asp:ImageButton
                                    ID="ImageButton_Criar_Filtro_Classificacao"
                                    runat="server"
                                    ImageUrl="~/Imagens/Insert_Filter.png"
                                    OnClick="ImageButton_Criar_Filtro_Classificacao_Click"
                                    ImageAlign="AbsBottom" Height="25px" Width="35px" />
                            </h6>
                            <asp:RadioButtonList ID="RadioButtonList_Classificacao" runat="server" AutoPostBack="True" CellPadding="0" CellSpacing="0"
                                DataSourceID="SqlDataSource_Classificacoes" DataTextField="Nome" DataValueField="Nome" Font-Names="Trebuchet MS"
                                OnSelectedIndexChanged="RadioButtonList_Classificacao_SelectedIndexChanged"
                                RepeatLayout="OrderedList" Visible="False" TextAlign="Left" Font-Bold="True">
                            </asp:RadioButtonList>

                            &nbsp; &nbsp; &nbsp;<asp:ImageButton ID="ImageButton_Limpar_Filtro_Classificacao" runat="server" ImageUrl="~/Imagens/Delete_Filter.png" OnClick="ImageButton_Limpar_Filtro_Classificacao_Click" Visible="False" ImageAlign="Middle" Height="20px" Width="30px" />
                            &nbsp;<asp:Label ID="Label_Classificacao" runat="server" Font-Names="Trebuchet MS" Font-Size="9pt" ForeColor="#43A047"></asp:Label>
                        </div>

                        <div class="col s6 m4 l4 left-align">
                            <h6 class="green-text">Release:
                                <asp:ImageButton
                                    ID="ImageButton_Criar_Filtro_Release"
                                    runat="server"
                                    ImageUrl="~/Imagens/Insert_Filter.png"
                                    OnClick="ImageButton_Criar_Filtro_Release_Click"
                                    ImageAlign="AbsBottom" Height="25px" Width="35px" />
                            </h6>

                            <asp:RadioButtonList ID="RadioButtonList_Release" runat="server" CellPadding="0" CellSpacing="0"
                                DataSourceID="SqlDataSource_Releases" DataTextField="Sigla" DataValueField="Nome"
                                OnSelectedIndexChanged="RadioButtonList_Release_SelectedIndexChanged"
                                RepeatLayout="OrderedList" Visible="False" AutoPostBack="True" Font-Names="Trebuchet MS" Font-Overline="False" Font-Strikeout="False" Font-Underline="False" TextAlign="Left" Font-Bold="True">
                            </asp:RadioButtonList>

                            &nbsp; &nbsp; &nbsp;<asp:ImageButton ID="ImageButton_Limpar_Filtro_Release" runat="server" ImageUrl="~/Imagens/Delete_Filter.png" OnClick="ImageButton_Limpar_Filtro_Release_Click" Visible="False" ImageAlign="Middle" Height="20px" Width="30px" />
                            &nbsp;<asp:Label ID="Label_Release" runat="server" Font-Names="Trebuchet MS" Font-Size="9pt" ForeColor="#43A047"></asp:Label>
                        </div>

                        <div class="col s12 m4 l4 left-align">
                            <h6 class="green-text">Ger. N3:
                                <asp:ImageButton
                                    ID="ImageButton_Criar_Filtro_Gerencia_N3"
                                    runat="server"
                                    ImageUrl="~/Imagens/Insert_Filter.png"
                                    OnClick="ImageButton_Criar_Filtro_Gerencia_N3_Click"
                                    ImageAlign="AbsBottom" Height="25px" Width="35px" />
                            </h6>
                            <asp:RadioButtonList ID="RadioButtonList_Gerencia_N3" runat="server" CellPadding="0" CellSpacing="0"
                                DataSourceID="SqlDataSource_Gerencias_N3" DataTextField="Nome" DataValueField="Id"
                                OnSelectedIndexChanged="RadioButtonList_Gerencia_N3_SelectedIndexChanged"
                                RepeatLayout="OrderedList" Visible="False" AutoPostBack="True" Font-Names="Trebuchet MS" TextAlign="Left" Font-Bold="True">
                            </asp:RadioButtonList>

                            &nbsp; &nbsp; &nbsp;<asp:ImageButton ID="ImageButton_Limpar_Filtro_Gerencia_N3" runat="server" ImageUrl="~/Imagens/Delete_Filter.png" OnClick="ImageButton_Limpar_Filtro_Gerencia_N3_Click" Visible="False" ImageAlign="Middle" Height="20px" Width="30px" />
                            &nbsp;<asp:Label ID="Label_Gerencia_N3" runat="server" Font-Names="Trebuchet MS" Font-Size="9pt" ForeColor="#43A047" Visible="False"></asp:Label>
                        </div>
                    </div>

                    <br />
                    <div class="row">
                        <asp:GridView
                            ID="GridView_Projetos"
                            DataSourceID="SqlDataSource_Projetos"
                            runat="server"
                            AutoGenerateColumns="False"
                            BorderColor="#99CC00"
                            BorderStyle="None"
                            CellPadding="0"
                            Font-Names="Arial"
                            GridLines="None"
                            CssClass="mGrid"
                            Width="100%"
                            DataKeyNames="Id"
                            EnablePersistedSelection="True" OnRowDataBound="GridView_Projetos_RowDataBound" OnDataBinding="GridView_Projetos_DataBinding">

                            <AlternatingRowStyle BackColor="#DCEDC8" />
                            <HeaderStyle BackColor="#C5E1A5" Font-Bold="False" ForeColor="#009900" />
                            <RowStyle BackColor="#F1F8E9" ForeColor="#009900" VerticalAlign="Top" />

                            <Columns>
                                <asp:TemplateField ShowHeader="False" ItemStyle-CssClass="td-center" ItemStyle-Width="10px">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="CheckBox_Projeto" runat="server" Text=' ' ToolTip='<%# Eval("Id") %>' Width="20px" />
                                    </ItemTemplate>
                                    <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Wrap="False" />
                                </asp:TemplateField>

                                <asp:BoundField DataField="Projeto" HeaderText="Proj." ItemStyle-CssClass="td-center">
                                    <ItemStyle CssClass="td-center" HorizontalAlign="center" VerticalAlign="Middle"></ItemStyle>
                                </asp:BoundField>

                                <asp:BoundField DataField="Nome" HeaderText="Nome" ItemStyle-CssClass="td-left">
                                    <ItemStyle CssClass="td-left" HorizontalAlign="left" VerticalAlign="Middle"></ItemStyle>
                                </asp:BoundField>

                                <asp:BoundField DataField="Classificacao" HeaderText="Clas.">
                                    <ItemStyle CssClass="td-center" HorizontalAlign="center" VerticalAlign="Middle"></ItemStyle>
                                </asp:BoundField>

                                <asp:BoundField DataField="Release" HeaderText="Rel.">
                                    <ItemStyle CssClass="td-center" HorizontalAlign="center" VerticalAlign="Middle"></ItemStyle>
                                </asp:BoundField>

                                <asp:BoundField DataField="Gerencia_N3" HeaderText="Ger. N3" ItemStyle-CssClass="td-left" />

                            </Columns>

                            <EmptyDataTemplate>
                                <div class="left-align">
                                    <asp:Label ID="Label78" runat="server" CssClass="center-align" Font-Bold="True" ForeColor="#81C784" Style="font-size: small" Text="Nenhum!"></asp:Label>
                                </div>
                            </EmptyDataTemplate>
                        </asp:GridView>
                        <div class="center-align">
                            <br />
                            <asp:Button
                                ID="Button_Confirmar_Lista_De_Projetos"
                                Height="25px"
                                CssClass="waves-effect waves-circle btn td-left green"
                                runat="server"
                                OnClick="Button_Confirmar_Lista_De_Projetos_Click"
                                Text="Confirmar"
                                Width="70px"
                                Font-Bold="True"
                                Font-Size="X-Small" />

                        </div>
                    </div>
                </div>
            </asp:Panel>
        </div>
        <hr />
    </div>

    <div class="row">
        <div class="col s12 td-center">
            <asp:Button
                ID="Button_Monitorar"
                Height="32px"
                CssClass="waves-effect waves-circle btn td-center green"
                runat="server"
                OnClick="Button_Monitorar_Click"
                Text="Monitorar"
                Width="100px"
                Font-Bold="True"
                Font-Size="Small" />

            <asp:Button
                ID="Button_Monitorar_Ping_Pong"
                Height="32px"
                CssClass="waves-effect waves-circle btn td-center green"
                runat="server"
                OnClick="Button_Monitorar_Click_Ping_Pong"
                Text="Ping Pong"
                Width="100px"
                Font-Bold="True"
                Font-Size="Small" />

            <asp:Button
                ID="Button_Voltar"
                Height="32px"
                CssClass="waves-effect waves-circle btn td-center green"
                runat="server"
                OnClick="Button_Voltar_Click"
                Text="Voltar"
                Width="100px"
                Font-Bold="True"
                Font-Size="Small" />
        </div>
        <div class="col s12 td-center">
            <br />
            <asp:Label ID="Label_Mensagem" runat="server" Font-Names="Trebuchet MS" Font-Size="10pt" ForeColor="#CC0000" Visible="False" Font-Bold="True"></asp:Label>
        </div>
    </div>

    <div>
        <asp:SqlDataSource ID="SqlDataSource_Fila" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>" SelectCommand="select distinct 
	Encaminhado_Para as Nome, 
	
	(case when Encaminhado_Para = 'SISRAF - CADASTRO DE FATURAMENTO - ACCENTURE' then 'SISRAF - CAD.FAT - ACCENTURE'
		  when Encaminhado_Para = 'PAINEL DE PORTABILIDADE NUMÉRICA - CLEARTECH' then 'PAINEL PORT.NUM - CLEARTECH'
		  when Encaminhado_Para = '(OI R2) CLARIFY - AMBIENTE OPEN - ACCENTURE' then '(OI R2) CLARIFY-AMB.OP.-ACCENTURE'
		  when Encaminhado_Para = 'SOM - SERVICE ORDER MANAGEMENT - IBM' then 'SOM - SERV.ORDER MAN. - IBM'
		  when Encaminhado_Para = 'INFORMÁTICA - INTEGRAÇÃO - ACCENTURE' then 'INFORMÁTICA-INT.-ACCENTURE'
		  when Encaminhado_Para = 'INFORMÁTICA - INTEGRAÇÃO - IBM' then 'INFORMÁTICA-INTEG.- IBM'
		  when Encaminhado_Para = 'INFORMÁTICA - INTEGRAÇÃO - OI' then 'INFORMÁTICA-INTEG.- OI'
		  when Encaminhado_Para = 'GATEWAY DE PORTABILIDADE - CLEARTECH' then 'GATEWAY DE PORT.- CLEARTECH'
		  when Encaminhado_Para = 'SISTEMAS DA ENGENHARIA - ENGENHARIA' then 'SIST.ENG.-ENGENHARIA'
		  when Encaminhado_Para = 'SIEBEL INFORMACIONAL - ACCENTURE' then 'SIEBEL INFORM.- ACCENTURE'
		  when Encaminhado_Para = 'NOTA FISCAL ELETRONICA - NEOGRID' then 'NOTA FIS.ELET. - NEOGRID'
		  when Encaminhado_Para = 'PRINTCENTER - ÁREA DE NEGÓCIOS' then 'PRINTCENTER - ÁREA DE NEG.'
		  
		else Encaminhado_Para
	end) as Nome_Abreviado

from 
	alm_defeitos 
where 
	status_atual not in('CLOSED', 'CANCELLED') 
order by 1"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource_Farol" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [SGQ_Defeitos_Farol]"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource_Status_Dev" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>" SelectCommand="select  distinct  
Status_Atual as Nome

 from 
alm_defeitos 
where status_atual not in('CLOSED', 'CANCELLED','ON_RETEST', 'PENDENT (RETEST)', 'REJECTED')  order by  1"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource_Status_Test" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>" SelectCommand="select distinct Status_Atual as Nome
 from alm_defeitos where status_atual in('ON_RETEST', 'PENDENT (RETEST)', 'REJECTED')  order by 1"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource_Releases" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>" SelectCommand="select 
	Nome,
	Sigla
from
	( 
		select distinct
			(select Nome from SGQ_Meses m WITH (NOLOCK) where m.id = re.release_mes) + '-' + convert(varchar(4), re.release_ano) as Nome,
			(select sigla from SGQ_Meses m WITH (NOLOCK) where m.id = re.release_mes) + '-' + convert(varchar(4), re.release_ano) as sigla,
			re.release_ano as Ano,
			re.release_mes as mes
		from 
			sgq_releases_entregas re WITH (NOLOCK)
	) as Aux
order by
	Ano desc, 
	Mes desc

--select 
--	Nome
--from
--	( 
--	select distinct 
--		et.release as Nome,
--		right(et.release,4) as Ano,
--		case when et.release &lt;&gt; ''
--		then (select right('0' + cast(id as varchar),2) from SGQ_Meses WITH (NOLOCK) where Nome = left(et.release,len(et.release)-5))
--		else ''
--		end as Mes	
--	from 
--		alm_cts ct WITH (NOLOCK)
--		inner join sgq_releases_entregas ap WITH (NOLOCK)
--			on ap.subprojeto = ct.subprojeto and
--		       ap.entrega = ct.entrega 
--		left join biti_subprojetos sp WITH (NOLOCK)
--			on sp.id = ct.subprojeto
--		left join biti_entregas et WITH (NOLOCK)
--			on et.subprojeto = ct.subprojeto and 
--		       et.id = ct.entrega
--	where
--		et.Release &lt;&gt; ''
--	) as Aux
--order by
--	Ano desc, 
--	Mes desc"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource_Gerencias_N3" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>" SelectCommand="select distinct 
	Gerencia_N3 as Id,
	replace(replace(replace(replace(replace(replace(replace(Gerencia_N3,'SOLUCOES','SOL'),'EMPRESARIAL','EMP'),'FATURAMENTO','FAT'),'APLICACAO','APLIC'),'PRODUTOS','PROD'),'PLANEJAMENTO','PLAN'),'GESTAO','GEST') as Nome
from 
	SGQ_Releases_Entregas re WITH (NOLOCK)
	left join biti_Subprojetos sp WITH (NOLOCK)
		on sp.id = re.Subprojeto
    left join biti_usuarios us WITH (NOLOCK)
		on us.id = sp.lider_tecnico_id 
--where 
--	re.release_mes = @Release_Mes and 
--	re.release_ano = @Release_Ano
--	--re.release_mes = 7 and 
--	--re.release_ano = 2016
order by 1"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource_Classificacoes" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>" SelectCommand="--select '' as Nome
--union all
select distinct 
Classificacao_Nome as Nome 
from 
biti_Subprojetos WITH (NOLOCK)
order by 1"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource_Projetos" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>"></asp:SqlDataSource>
    </div>

</asp:Content>

<asp:Content ID="Content3" runat="server" ContentPlaceHolderID="head">
    <style type="text/css">
        .mGrid {
            width: 100%;
            margin: 2px 0 2px 0;
        }

        .tr {
            font-size: 0.8em;
            padding: 0px;
            margin: 2px 0 2px 0;
            text-align: center;
            vertical-align: top;
        }

        .mGrid th {
            font-size: 0.8em;
            padding: 0px;
            border-width: 2px;
            margin: 2px 0 2px 0;
            text-align: center;
            vertical-align: top;
        }

        .mGrid td {
            font-size: 0.8em;
            padding: 0px;
            border-width: 2px;
            margin: 2px 0 2px 0;
            vertical-align: middle;
            grid-column: start end;
            border: dotted;
            border-width: 1px;
            border-color: gainsboro;
        }

        .td-left {
            font-size: 0.8em;
            padding: 0px;
            border-width: 2px;
            margin: 2px 0 2px 0;
            text-align: left;
            vertical-align: top;
        }

        .td-right {
            font-size: 0.8em;
            padding: 0px;
            border-width: 2px;
            margin: 2px 0 2px 0;
            text-align: right;
            vertical-align: top;
        }


        .td-center {
            font-size: 0.8em;
            padding: 0px;
            border-width: 2px;
            margin: 2px 0 2px 0;
            text-align: center;
            vertical-align: top;
        }
    </style>
</asp:Content>

