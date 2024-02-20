import { serviceTabs } from "../../constants"
import Tabs from "../../components/Tabs"
import ServiceGrid from "./ServiceGrid"

export default function ServiceTabs() {
  return (
    <div className="container py-[3rem] px-6">
        <div className="grid gap-4 sm:grid-cols-3 max-w-[1110px] mx-auto">
            {serviceTabs.map((tab, index) =>
                <Tabs key={tab.name+index} title={tab.name} text={tab.text} icon={tab.icon} />
            )}
        </div>

        <div className="grid max-w-[1110px] mx-auto mt-[3rem] gap-[.5rem] md:grid-cols-4 md:grid-rows-4">
              <ServiceGrid />
        </div>
    </div>
  )
}
