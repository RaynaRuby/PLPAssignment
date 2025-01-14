import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Lecturers",
        href: "/list/teachers",
      },
      {
        icon: "/subject.png",
        label: "Modules",
        href: "/list/subjects",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
    return (
      <div className='mt-4 text-sm'>
        {menuItems.map((i)=>(
          <div className='flex flex-col gap-2' key={i.title}>
            <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
            {i.items.map(item=>(
              <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px2 rounded-md hover:bg-blue-100">
                <Image src={item.icon} alt="" width={20} height={20}/>
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
  }

  export default Menu;