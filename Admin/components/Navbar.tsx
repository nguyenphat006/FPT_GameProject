<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import logo from "../img/FPT_Polytechnic.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
=======
import Image from 'next/image';
import Link from 'next/link';
import logo from '../img/FPT_Polytechnic.png';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
>>>>>>> 366eb2ba711b28d4d9584c1b936288793e025566
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="FPT_Education" width={100} />
=======
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
      <Link href='/'>
        <Image src={logo} alt='FPT_Education' width={100} />
>>>>>>> 366eb2ba711b28d4d9584c1b936288793e025566
      </Link>

      <div className="flex items-center">
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-black">BT</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="absolute right-0 md:right-auto md:left-auto md:top-auto md:relative">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;