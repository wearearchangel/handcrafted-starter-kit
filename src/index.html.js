import font from "./fonts/hubot-sans.woff2";

const title = "Handcrafted Starter Kit";
const description = "Web site created using the Handcrafted Starter Kit";
const keywords = "Handcrafted, Starter, Kit";

const Index = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8"/>

        <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-type"/>

        <meta content="no" name="msapplication-tap-highlight"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="${description}" name="description"/>
        <meta content="${keywords}" name="keywords"/>

        <link href="/manifest.json" rel="manifest"/>
        <link href="/favicon.ico" rel="shortcut icon"/>
        <link href="${font}" as="font" crossorigin rel="preload" type="font/woff2"/>

        <title>${title}</title>
    </head>

    <body>
        <noscript>You need to enable JavaScript to view this site.</noscript>
        <div class="wrapper">
            <header class="header">
                <div class="logo">
                    <div class="logo__img">
                        <svg viewBox="0 0 15 25" xmlns="http://www.w3.org/2000/svg">
                            <g data-name="Layer 2" id="Layer_2">
                                <g data-name="Layer 1" id="Layer_1-2">
                                    <rect height="5" width="5"/>
                                    <polygon points="15 0 15 15 5 15 5 25 0 25 0 10 10 10 10 0 15 0"/>
                                    <rect height="5" width="5" x="10" y="20"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="logo__text">
                        <div class="name">Handcrafted</div>
                        <div class="tagline">Starter Kit</div>
                    </div>
                </div>

                <nav class="nav">
                    <a class="nav__item" data-route="/">Home</a>
                </nav>
            </header>

            <main class="page"></main>

            <footer class="footer">
                <div class="footer__copy">
                    &copy; ${new Date().getFullYear()} Handcrafted Starter Kit. All Rights Reserved
                </div>
                <div class="footer__signature">
                    <a href="//wearearchangel.com">Handcrafted in Kenya</a>
                </div>
            </footer>
        </div>
    </body>
    </html>
`;

export default Index;
