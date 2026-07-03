import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Navbar} from '@/components/Navbar';
import {AIConcierge} from '@/components/AIConcierge';
import "../globals.css";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#141313] text-[#e5e2e1]">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {props.children}
          <AIConcierge />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
