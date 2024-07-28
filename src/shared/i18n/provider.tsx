"use client";

import { PropsWithChildren } from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";

import { Locale } from "./types";

export default function ServerIntlProvider(
  props: PropsWithChildren & {
    messages: Record<string, string> | Record<string, MessageFormatElement[]>;
    locale: Locale;
  }
) {
  const { messages, locale, children } = props;
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
