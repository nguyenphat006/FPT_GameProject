import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Newspaper,
  CalendarFoldIcon,
  Gamepad2,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Command className='bg-secondary rounded-none p-4 h-full'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList className="space-y-6"> 
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem className="py-4 px-4 hover:bg-primary rounded-md transition-colors duration-300 ease-in-out">
            <Newspaper className='mr-3 h-5 w-5' />
            <Link href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem className="py-4 px-4 hover:bg-primary rounded-md transition-colors duration-300 ease-in-out">
            <CalendarFoldIcon className='mr-3 h-5 w-5' />
            <Link href='/events'>Event</Link>
          </CommandItem>
          <CommandItem className="py-4 px-4 hover:bg-primary rounded-md transition-colors duration-300 ease-in-out">
            <Gamepad2 className='mr-3 h-5 w-5' />
            <Link href='/games'>Games</Link>
          </CommandItem>
          <CommandItem className="py-4 px-4 hover:bg-primary rounded-md transition-colors duration-300 ease-in-out">
            <Users className='mr-3 h-5 w-5' />
            <Link href='/users'>User</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        {/* <CommandGroup heading='Settings'>
          <CommandItem>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup> */}
      </CommandList>
    </Command>
  );
};

export default Sidebar;
