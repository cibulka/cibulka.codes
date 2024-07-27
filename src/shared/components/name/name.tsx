import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';
import { metaMessages } from '@/shared/messages';

export async function Name(props: { className: string; classNameIcon?: string; locale: Locale }) {
  const { formatMessage } = await getIntl(props.locale);
  return (
    <div className="relative flex">
      <div className="table relative">
        <h1 className={[props.className, 'font-bold'].filter(Boolean).join(' ')}>
          {formatMessage(metaMessages.name)}
        </h1>
        <span
          className={[props.classNameIcon || 'w-8 h-8', 'absolute top-0 right-0', 'text-action']
            .filter(Boolean)
            .join(' ')}
          style={{ transform: 'translate(100%)' }}
        >
          <IconOnionAlt />
        </span>
      </div>
    </div>
  );
}
