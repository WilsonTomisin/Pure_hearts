import { Link } from 'react-router-dom'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

const MobileNav = ({ Links}:{ Links:Record<string, string>[]}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Open</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {Links.map(link => {
            return (
              <SheetClose asChild>
                <Link to={link.path}>{link.name}</Link>
              </SheetClose>
            )
          })}
        </div>
        <SheetFooter>
          {/* <Button type="submit">Save changes</Button> */}
          <SheetClose asChild>{/* <Button variant="outline">Close</Button> */}</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
