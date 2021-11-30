<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Experiencia2._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">



    &nbsp;&nbsp;&nbsp;



    <br />
    <br />
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Label ID="Label2" runat="server" Text="Label" Width="196px"></asp:Label>
            <br />
            <asp:Timer ID="Timer1" runat="server" Interval="1000" OnTick="Page_Load">
            </asp:Timer>
        </ContentTemplate>
    </asp:UpdatePanel>
    <br />
    <asp:Label ID="Label3" runat="server" Text="Label" Width="196px"></asp:Label>
    <br />
    


</asp:Content>
