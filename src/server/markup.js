import serialize from 'serialize-javascript';
import { Helmet } from "react-helmet";

export const getHTML = (markup, initialState, styleTags) => {
    const helmet = Helmet.renderStatic();

    return (
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1">            
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
            
                <script src="/client.js" defer></script>
                <script>
                    window.__INITIAL_STATE__ = ${serialize(initialState)}
                </script>
                
                ${styleTags}
            </head>

            <body>
                <div id="app">${markup}</div>
            </body>
        </html>
    `
    );
}