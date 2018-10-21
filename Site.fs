namespace WebSharper4

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server
open WebSharper.UI.Templating

type EndPoint =
    | [<EndPoint "/">] Home

type Index = Templating.Template<"Main.html", ClientLoad.FromDocument>

[<JavaScript>]
module Client =
    open WebSharper.JavaScript

    let Startup() =
        Index()
            .ClickMe(fun _ -> JS.Alert "Clicked!")
            .ClickText("Click me!")
            .Bind()

module Site =
    open WebSharper.UI.Html

    let HomePage ctx =
        Content.Page(
            Index()
                .Paragraph(p [] [text "Welcome to my site."])
                .Elt(keepUnfilled = true)
                .OnAfterRender(fun _ -> Client.Startup())
        )

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx endpoint ->
            match endpoint with
            | EndPoint.Home -> HomePage ctx
        )
