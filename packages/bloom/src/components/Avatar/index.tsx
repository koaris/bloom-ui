import { twMerge } from 'tailwind-merge'
import * as RadixAvatar from "@radix-ui/react-avatar"
import { FaUser } from "react-icons/fa";

export interface AvatarProps {
    children: React.ReactNode;
    src?: string;
    alt?: string;
}

export const Avatar = ({ 
    children,
    ...rest
}: AvatarProps) => {


    return (
        <RadixAvatar.Root className={twMerge(`
            rounded-full inline-block w-16 h-16
            overflow-hidden
        `)}>
            <RadixAvatar.Image className={twMerge(`
                w-full h-full object-cover rounded-full
            `)} {...rest} />
            <RadixAvatar.Fallback className={twMerge(`
                w-full h-full flex items-center justify-center bg-neutral-600
                text-neutral-600
            `)}>
                <FaUser color='#FFFFFF' size={24} />
            </RadixAvatar.Fallback>
        </RadixAvatar.Root>
    );
};
