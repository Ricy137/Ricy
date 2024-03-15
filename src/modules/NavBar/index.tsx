'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cx from 'clsx';
import { LeftArrowIcon } from '@/components/Icons';

const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={cx(
        'p-[12px] fixed flex flex-row items-center w-full h-[50px]',
        pathname === '/' && 'hidden'
      )}
    >
      <Link href="/" className="w-[24px] h-[24px]">
        <LeftArrowIcon svgClassName="text-[24px]" />
      </Link>
    </div>
  );
};

export default NavBar;
