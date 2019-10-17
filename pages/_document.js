import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let props = { ...initialProps };

    return props;
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="/static/assets/template/listed/fonts/icomoon/style.css"
          />

          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/magnific-popup.css"
          />
          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/jquery-ui.css"
          />
          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/owl.theme.default.min.css"
          />

          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/bootstrap-datepicker.css"
          />

          <link
            rel="stylesheet"
            href="/static/assets/template/listed/fonts/flaticon/font/flaticon.css"
          />

          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/aos.css"
          />
          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/rangeslider.css"
          />

          <link
            rel="stylesheet"
            href="/static/assets/template/listed/css/style.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style
            dangerouslySetInnerHTML={{
              __html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }`
            }}
          ></style>
        </body>
      </html>
    );
  }
}
