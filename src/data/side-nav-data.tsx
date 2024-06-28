import { Community } from "iconoir-react"
import { Chart, Home } from "iconsax-react"
export const SideNavData = [
  {
    title: "Overview",
    link: "/dashboard",
    icon: <Home size={20} className="text-iconColor" />,
  },

  {
    title: "Transactions",
    link: "/dashboard/orders",
    icon: <Chart size={20} className="text-iconColor" />,
  },
  {
    title: "Customers",
    link: "/dashboard/customers",
    icon: <Community width={20} height={20} className="text-iconColor" />,
  },
]
