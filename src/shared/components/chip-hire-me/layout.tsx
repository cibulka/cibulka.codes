'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { URLS } from '@/constants/url';
import { Chip } from '@/shared/components/chip';
import { ChipVariant } from '@/shared/components/chip/types';
import { Modal } from '@/shared/components/modal';

export function ChipHireMeLayout(
  props: PropsWithChildren<{ classNameChip?: string; label: string }>,
) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { back, push } = useRouter();

  const onCloseModal = useCallback(() => {
    back();
    setIsModalOpened(false);
  }, [back]);
  const onClickButton = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      push('?hire-me');
      setIsModalOpened(true);
    },
    [push],
  );

  const params = useSearchParams();
  const isOpen = params.get('hire-me') === '';
  useEffect(() => {
    if (!isOpen) setIsModalOpened(false);
  }, [isOpen]);

  return (
    <>
      <Chip
        className={props.classNameChip}
        href={URLS.HIRE_ME}
        variant={ChipVariant.TRANSPARENT}
        onClick={onClickButton}
      >
        {props.label}
      </Chip>
      <Modal open={isModalOpened} onClose={onCloseModal}>
        {props.children}
      </Modal>
    </>
  );
}
