const html = (name, email, message, hire, projectMsg, budget, duration) => {
  return `
  <!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
    <html
    xmlns="https://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    >
    <head>
        <title>Email</title>
        <meta http–equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http–equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
    </head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap");

        * {
        --bg-main: #111116;
        --purple: #7358d9;
        --font-main: "Poppins", sans-serif;
        --font-mono: "Noto Sans Mono", monospace;

        margin: 0;
        padding: 0;
        color: #fff;
        font-family: var(--font-main);
        }

        body {
        background: var(--bg-main);
        -webkit-text-size-adjust: 100% !important;
        -ms-text-size-adjust: 100% !important;
        -webkit-font-smoothing: antialiased !important;
        }

        .items {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        }

        label {
        font-weight: 700;
        }

        ul {
        list-style: none;
        }

        ul li {
        margin-bottom: 20px;
        }

        .right {
        margin-left: 20px;
        }

        .preview {
        min-height: 50px;
        height: auto;
        width: 300px;
        border: 1px solid var(--purple);
        background: rgba(115, 88, 217, 0.1);
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 14px;
        word-wrap: break-word;
        overflow: hidden;
        display: flex;
        align-items: center;
        }

        .preview p {
        box-sizing: border-box;
        padding: 10px;
        }
    </style>
    <body>
        <div class="items">
        <ul>
            <li>
            <label>Name</label>
            <div class="preview">
                <p>${name}</p>
            </div>
            </li>
            <li>
            <label>Email</label>
            <div class="preview">
                <p>${email}</p>
            </div>
            </li>
            <li>
            <label>Message</label>
            <div class="preview">
                <p>${message}</p>
            </div>
            </li>
            <li>
            <label>Hire</label>
            <div class="preview">
                <p>${hire.toUpperCase()}</p>
            </div>
            </li>
        </ul>
        <ul class="right">
            <li>
            <label>Budget</label>
            <div class="preview">
                <p>$${budget}+</p>
            </div>
            </li>
            <li>
            <label>Duration</label>
            <div class="preview">
                <p>${duration}</p>
            </div>
            </li>
            <li>
            <label>Project message</label>
            <div class="preview">
                <p>${projectMsg}</p>
            </div>
            </li>
        </ul>
        </div>
    </body>
    </html>`;
};

export default html;
