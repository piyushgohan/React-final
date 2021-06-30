import {
    CurrencyDollarIcon,
    LockClosedIcon,
    SupportIcon,
    TruckIcon,
} from '@heroicons/react/outline'
import ButtonIcon from './ButtonIcon'
import React from 'react';

function Buttons() {
    return (
        <div className="flex flex-row w-100 justify-evenly px-10 mt-20">
            <ButtonIcon title="Free Delivery" Icon={TruckIcon} />
            <ButtonIcon title="Money Back Gurantee" Icon={CurrencyDollarIcon} />
            <ButtonIcon title="Always Support" Icon={SupportIcon} />
            <ButtonIcon title="Secure Payment" Icon={LockClosedIcon} />
        </div>
    )
}

export default Buttons
