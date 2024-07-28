import { IconArrowLeft } from '@/icons/IconArrowLeft';
import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { Button } from '@/shared/components/button';
import { Contacts } from '@/shared/components/contacts';
import { getIntl } from '@/shared/i18n/get-intl';
import { PropsWithLocale } from '@/types/params';

import { messages } from './messages';
import styles from './styles.module.css';

const emoji = '😱';

export async function ErrorView(props: PropsWithLocale<{ title?: string; subTitle?: string }>) {
  const { formatMessage } = await getIntl(props.locale);
  return (
    <div className={['flex flex-col gap-8 items-center justify-center', 'px-8'].join(' ')}>
      <div className="relative aspect-square text-action" style={{ width: '25vmin' }}>
        <IconOnionAlt />
        <span
          className={['absolute inset-0', 'flex items-center justify-center', styles.icon].join(
            ' ',
          )}
          style={{ fontSize: '15vmin' }}
        >
          <span className="flex shake shake-constant mt-4">{emoji}</span>
        </span>
      </div>
      <header className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">{props.title || formatMessage(messages.title)}</h1>
        {props.subTitle && <h2 className="mt-2 text-2xl">{props.subTitle}</h2>}
      </header>
      <Button href="https://www.cibulka.codes" locale={props.locale}>
        <span className="flex items-center gap-2">
          {formatMessage(messages.back)}
          <span className="w-6 h-6 transform rotate-180 -mr-2">
            <IconArrowLeft />
          </span>
        </span>
      </Button>

      <div className="text-2xl max-w-md text ml-auto mr-auto text-center">
        <p>{formatMessage(messages.contact)}</p>
      </div>
      <Contacts
        className="items-center justify-center"
        isLinkToWeb
        isCentered
        locale={props.locale}
      />
    </div>
  );
}
