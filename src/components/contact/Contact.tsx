import { ButtonCopy } from '@/components/button-copy/ButtonCopy';
import { Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function Contact(props: {
  href: string;
  locale: Locale;
  value: string;
  icon: JSX.Element;
}) {
  const { t } = await getTranslationServer('common', props.locale);
  return (
    <span className="flex gap-1 items-center rounded-md bg-chip">
      <a href={props.href} className="flex items-center flex-1 gap-1">
        <span className="w-6 h-6 p-0.5 ml-1 text-text_fade">{props.icon}</span>
        <span className="flex-1">{props.value}</span>
      </a>
      <ButtonCopy
        className="border-l ml-1 p-1 flex-shrink-0 w-8 h-8"
        label={t('copy')}
        value={props.value}
      />
    </span>
  );
}
