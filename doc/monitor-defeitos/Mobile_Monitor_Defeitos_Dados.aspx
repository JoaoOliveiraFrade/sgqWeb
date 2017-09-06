<%@ Page Title="" Language="C#" MasterPageFile="~/Mobile_Monitor.master" AutoEventWireup="true" CodeFile="Mobile_Monitor_Defeitos_Dados.aspx.cs" Inherits="Mobile" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script language="javascript" type="text/javascript">

        function div_descricao_expandcollapse(Id) {
            var div_descricao = document.getElementById('div_descricao' + Id);
            var img_descricao = document.getElementById('img_descricao' + Id);
            if (div_descricao.style.display == "none") {
                div_descricao.style.display = "inline";
                img_descricao.src = "Imagens/Fechar.png";
            } else {
                div_descricao.style.display = "none";
                img_descricao.src = "Imagens/Abrir.png";
            }
        }

        function div_def_relacionado_expandcollapse(Id) {
            var div_def_relacionados = document.getElementById('div_def_relacionados' + Id);
            var img_def_relacionados = document.getElementById('img_def_relacionados' + Id);
            if (div_def_relacionados.style.display == "none") {
                div_def_relacionados.style.display = "inline";
                img_def_relacionados.src = "Imagens/bug-icon.png";
            } else {
                div_def_relacionados.style.display = "none";
                img_def_relacionados.src = "Imagens/bug-icon-disable.png";
            }
        }

    </script>
    <br />
    <div class="row center-align" style="margin: 0px; padding: 0px; border: 0px">
         <div class="col s12" style="margin: 0px; padding-left: 1%; border: 0px">
            <asp:GridView
                ID="GridView_Agentes"
                runat="server"
                AutoGenerateColumns="False"
                BorderColor="#99CC00"
                BorderStyle="None"
                CellPadding="0"
                Font-Names="Arial"
                GridLines="Vertical"
                CssClass="mGrid"
                Width="100%"  DataKeyNames="Agente" OnRowDataBound="GridView_Agentes_RowDataBound" ShowHeader="False">

                <AlternatingRowStyle BackColor="#F1F8E9" />
                <HeaderStyle BackColor="#C5E1A5" Font-Bold="False" ForeColor="#009900" />
                <RowStyle BackColor="#F1F8E9" ForeColor="#009900" VerticalAlign="Top" />

                <Columns>
                    <asp:TemplateField ShowHeader="False">
                        <ItemTemplate>
                            <asp:Label ID="Label2" runat="server" Text='<%# Bind("Agente") %>' Font-Bold="True" Font-Size="Medium" Font-Underline="True"></asp:Label>
                            &nbsp; &nbsp;
                            <asp:Label ID="Label79" runat="server" Text="Qtd Defeitos nesse Agente:"></asp:Label>
                            &nbsp;<asp:Label ID="Label80" runat="server" Text='<%# Bind("Qte_Defeitos_Abertos") %>'></asp:Label>
                            <br />
                            <asp:GridView ID="GridView_Defeitos_Abertos" runat="server" AutoGenerateColumns="False" BorderColor="#99CC00" BorderStyle="None" CellPadding="0" CssClass="mGrid" DataKeyNames="Id" Font-Names="Simplon BP Regular" GridLines="Vertical" OnRowDataBound="GridView_Defeitos_Abertos_RowDataBound" OnSelectedIndexChanged="GridView_Defeitos_Abertos_SelectedIndexChanged" Width="100%" EmptyDataText="Sem dados!" Font-Overline="False" Font-Strikeout="False" HorizontalAlign="Justify">
                                <AlternatingRowStyle BackColor="#F1F8E9" />
                                <HeaderStyle BackColor="#C5E1A5" Font-Bold="False" ForeColor="#009900" BorderStyle="Solid" />
                                <RowStyle BackColor="#F1F8E9" ForeColor="#009900" VerticalAlign="Top" />
                                <Columns>
                                    <asp:TemplateField ShowHeader="False">
                                        <ItemTemplate>
                                            <asp:ImageButton ID="ImageButtonSelecao" runat="server" CausesValidation="False" CommandName="Select" ImageAlign="AbsMiddle" ImageUrl="~/Imagens/Selecao_Dedo.png" Text="Select" ToolTip="Detalhamento" Width="20px" />
                                        </ItemTemplate>
                                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="20px" />
                                    </asp:TemplateField>
                                    <asp:TemplateField ItemStyle-HorizontalAlign="Right" ItemStyle-VerticalAlign="Middle">
                                        <ItemTemplate>
                                            <a data-toggle="title" href="JavaScript:div_descricao_expandcollapse('<%# Eval("Id") %>');" title="Detalhes">
                                            <img id="img_descricao<%# Eval("Id") %>" border="0" src="Imagens/Abrir.png" style="vertical-align: top; padding:0px; margin:0px;margin-left:1px" class="style_Ico_x1" />
                                            </a>
                                        </ItemTemplate>
                                        <ItemStyle HorizontalAlign="right" VerticalAlign="Middle" Width="1px" />
                                    </asp:TemplateField>
                                    <asp:TemplateField ItemStyle-HorizontalAlign="Right" ItemStyle-VerticalAlign="Middle">
                                        <ItemTemplate>
                                            <%--<a href="JavaScript:div_def_relacionado_expandcollapse('<%# Eval("Id") %>');" data-toggle="title" title="Defeitos relacionados a este">--%><%--<asp:Image runat="server" id="img_def_relacionados<%# Eval("Id") %>" ImageUrl="~/Imagens/bug-icon-disable.png" style="vertical-align: middle; padding:0px; margin:0px;margin-left:1px" class="style_Ico_x2"/>--%><%--<asp:Image id="img_def_relacionados<%# Eval("Id") %>" ImageUrl="~/Imagens/bug-icon-disable.png" style="vertical-align: middle; padding:0px; margin:0px;margin-left:1px" class="style_Ico_x2" />--%><%--<asp:Image id="img_def_relacionados" ImageUrl="~/Imagens/bug-icon-disable.png" style="vertical-align: middle; padding:0px; margin:0px;margin-left:1px" class="style_Ico_x2" />--%><%--<img id="img_def_relacionados<%# Eval("Id") %>" border="0" src="Imagens/bug-icon-disable.png" style="vertical-align: middle; padding:0px; margin:0px;margin-left:1px" class="style_Ico_x2" /></a>--%>
                                            <%--<asp:Image ID="img_def_relacionados<%#DataBinder.Eval(Container.DataItem, "Id")%>" ImageUrl="~/Imagens/bug-icon-disable.png" runat="server"/>--%><%--</a>--%>
                                        </ItemTemplate>
                                        <ItemStyle HorizontalAlign="right" VerticalAlign="Middle" Width="1px" />
                                    </asp:TemplateField>
                                    <asp:BoundField DataField="Projeto" HeaderText="Proj." ItemStyle-CssClass="td-center" SortExpression="Projeto">
                                    <ItemStyle CssClass="td-center" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Defeito" HeaderText="Def." ItemStyle-CssClass="td-left">
                                    <ItemStyle CssClass="td-center" HorizontalAlign="Left" VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Nome" HeaderText="Nome" ItemStyle-CssClass="td-left" Visible="false">
                                    <ItemStyle CssClass="td-left" HorizontalAlign="Left" VerticalAlign="Middle" Wrap="True" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Ciclo" HeaderText="Ciclo" ItemStyle-CssClass="td-left" Visible="false">
                                    <ItemStyle CssClass="td-left" HorizontalAlign="Left" VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Abertura" HeaderText="Ab." ItemStyle-CssClass="td-center" Visible="false">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Sistema" HeaderText="Sistema" ItemStyle-CssClass="td-center">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Fila" HeaderText="Agente" ItemStyle-CssClass="td-center">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Origem" HeaderText="Origem" ItemStyle-CssClass="td-center">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Status" HeaderText="Status" ItemStyle-CssClass="td-center" SortExpression="Status">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Severidade" HeaderText="Sev." ItemStyle-CssClass="td-left" SortExpression="Severidade">
                                    <ItemStyle CssClass="td-center" HorizontalAlign="Center" VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="SLA(h)" HeaderText="SLA (h)" ItemStyle-CssClass="td-center" Visible="false">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Agind(h)" HeaderText="Aging (h)" ItemStyle-CssClass="td-center" SortExpression="Agind(h)">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Temp_ult_Ag" HeaderText="Aging(Últ_Agente)(h)" ItemStyle-CssClass="td-center" SortExpression="Temp_ult_Ag">
                                        <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Aging_ult_ag_soma" HeaderText="Aging(Últ_Agente_Soma)(h)">
                                    <ItemStyle CssClass="td-center" HorizontalAlign="Center" VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Qtd_CTs_Impactados" HeaderText="CTs Impac." ItemStyle-CssClass="td-center" SortExpression="Qtd_CTs_Impactados">
                                    <ItemStyle VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="Risco_Projeto" HeaderText="Risco" ShowHeader="False">
                                    <ItemStyle VerticalAlign="Middle" CssClass="td-center" />
                                    </asp:BoundField>
                                    <asp:TemplateField HeaderText="Ping Pong" ItemStyle-CssClass="td-center" SortExpression="Ping_Pong">
                                        <ItemStyle HorizontalAlign="Center" />
                                        <ItemTemplate>
                                            <asp:Label ID="Label1" runat="server" Text='<%# Bind("Ping_Pong") %>'></asp:Label>
                                            <tr>
                                                <td colspan="100%">
                                                    <div id='div_descricao<%# Eval("Id") %>' class="green-text" style="overflow: auto; display: none; position: relative; left: 15px; overflow: auto; display: none; text-align: left;">
                                                        <asp:Label ID="Label_Nome" runat="server" Text='<%# Bind("Nome") %>'></asp:Label>
                                                        <br />
                                                        <br />
                                                        <asp:Label ID="Label_Titulo" runat="server"></asp:Label>
                                                        <br />
                                                        <asp:Label ID="Label_Agente_Historico" runat="server"></asp:Label>
                                                        <asp:Label ID="Label_Descricao" runat="server"></asp:Label>
                                                    </div>
                                                    <div id='div_def_relacionados<%# Eval("Id") %>' class="green-text" style="overflow: auto; display: none; position: relative; left: 15px; overflow: auto; display: none; text-align: left;">
                                                        <asp:Label ID="Label_Defeitos_Relacionados" runat="server" Text='<%# Bind("Nome") %>'></asp:Label>
                                                        <br />
                                                    </div>
                                                </td>
                                            </tr>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                </Columns>
                                <EmptyDataTemplate>
                                    <div class="left-align">
                                        <asp:Label ID="Label78" runat="server" CssClass="center-align" Font-Bold="True" ForeColor="#81C784" Style="font-size: small" Text="Nenhum!"></asp:Label>
                                    </div>
                                </EmptyDataTemplate>
                            </asp:GridView>
                        </ItemTemplate>
                        <ItemStyle CssClass="td-left" HorizontalAlign="Left" />
                    </asp:TemplateField>
                </Columns>

                <EmptyDataTemplate>
                    <div class="left-align">
                        <asp:Label ID="Label8" runat="server" CssClass="center-align" Font-Bold="True" ForeColor="#81C784" Style="font-size: small" Text="Nenhum!"></asp:Label>
                    </div>
                </EmptyDataTemplate>
            </asp:GridView>
        </div>
        <div class="col s12" style="margin: 0px; padding-left: 1%; border: 0px">

            <ul class="collapsible popout green-text" data-collapsible="accordion">
                <li>
                    <div class="collapsible-header" style="padding: 0px; margin: 0px; padding-top: 3px; padding-left: 1px; text-align: left;">
                        <b class="green-text center-align" style="font-size: 12px; font-style: normal;">&nbsp;Legenda do Agind(h)</b>
                    </div>
                    <div class="collapsible-body green-text lime lighten-5">
                        <div class="row td-center">
                            <div class="col s12 m6 l4">
                                <span style="font-size: small; padding: 0px; margin: 0px; text-align: left; white-space: nowrap; vertical-align: top">High:&nbsp;
                                <asp:ImageButton ID="ImageButton9" runat="server" ImageUrl="~/Imagens/1-Farol_Verde.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    <= 1&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton12" runat="server" ImageUrl="~/Imagens/2-Farol_Amarelo.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    2 a 3&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton13" runat="server" ImageUrl="~/Imagens/4-Farol_Vermelho.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    4 a 5&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton14" runat="server" ImageUrl="~/Imagens/5-Farol_Roxo.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    >= 6&nbsp;&nbsp;
                                </span>
                            </div>
                            <div class="col s12 m6 l4">
                                <span style="font-size: small; padding: 0px; margin: 0px; text-align: left; white-space: nowrap; vertical-align: top">Medium:&nbsp;
                                <asp:ImageButton ID="ImageButton15" runat="server" ImageUrl="~/Imagens/1-Farol_Verde.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    <= 4&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton16" runat="server" ImageUrl="~/Imagens/2-Farol_Amarelo.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    5 a 7&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton17" runat="server" ImageUrl="~/Imagens/4-Farol_Vermelho.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    8 a 10&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton18" runat="server" ImageUrl="~/Imagens/5-Farol_Roxo.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    >= 11&nbsp;&nbsp;
                                </span>
                            </div>
                            <div class="col s12 m12 l4">
                                <span style="font-size: small; padding: 0px; margin: 0px; text-align: left; white-space: nowrap; vertical-align: top">Low:&nbsp;
                                <asp:ImageButton ID="ImageButton19" runat="server" ImageUrl="~/Imagens/1-Farol_Verde.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    <= 11&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton20" runat="server" ImageUrl="~/Imagens/2-Farol_Amarelo.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    12 a 15&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton21" runat="server" ImageUrl="~/Imagens/4-Farol_Vermelho.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    16 a 19&nbsp;&nbsp;
                                <asp:ImageButton ID="ImageButton22" runat="server" ImageUrl="~/Imagens/5-Farol_Roxo.png" Height="10px" Width="10px" ImageAlign="Baseline" />
                                    >= 20&nbsp;&nbsp;
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="row">
        <div class="col s12 td-center">
            <asp:Button
                ID="backButton_Voltar"
                Height="32px"
                CssClass="waves-effect waves-circle btn td-center green"
                runat="server"
                OnClick="backButton_Click"
                Text="Voltar"
                Width="100px"
                Font-Bold="True"
                Font-Size="Small" />
        </div>

    </div>

    <asp:SqlDataSource ID="SqlDataSource_Defeitos_Abertos" runat="server" ConnectionString="<%$ ConnectionStrings:Connection_SGQ %>" ProviderName="<%$ ConnectionStrings:Connection_SGQ.ProviderName %>"></asp:SqlDataSource>

    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip(); 
        });
    </script>

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
            /*border: dotted;*/
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
        .style_Ico_x1 {
            height: 17px;
            width: 17px;
        }
        .style_Ico_x2 {
            height: 20px;
            width: 20px;
            vertical-align:bottom;
        }
    </style>
</asp:Content>

