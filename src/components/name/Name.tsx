import { Locale } from '@/constants/config';
import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function Name(props: { className: string; classNameIcon?: string; locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  return (
    <div className="relative flex">
      <div className="table relative">
        <h1 className={[props.className, 'font-bold'].filter(Boolean).join(' ')}>{t('name')}</h1>
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
