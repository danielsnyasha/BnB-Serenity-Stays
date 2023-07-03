'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps {
  mycurrentUser?: SafeUser | null
}

const UserMenu : React.FC<UserMenuProps> = ({
  mycurrentUser
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!mycurrentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, mycurrentUser]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
          <Avatar src={mycurrentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='overflow-hidden right-0 top-12 text-sm absolute rounded-xl shadow-md w[40vw] md:w-3/4 bg-white'>
          <div className="flex flex-col cursor-pointer">
            {mycurrentUser ? (
              <>
                <MenuItem 
                  label="My trips" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="My reservations" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="Serenity Stays your home" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;