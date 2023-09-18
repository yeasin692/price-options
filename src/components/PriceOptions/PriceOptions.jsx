import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const PriceOptions = [
        {
          id: 1,
          name: 'Basic Membership',
          price: 30.00,
          features: [
            'Access to gym facilities',
            'Cardio equipment usage',
            'Locker room access',
            'Online workout tracking',
            'Discounts at the gym store',
          ],
        },
        {
          id: 2,
          name: 'Premium Membership',
          price: 50.00,
          features: [
            'Access to gym facilities',
            'Cardio equipment usage',
            'Locker room access',
            'Access to group fitness classes',
            'Online workout tracking',
            'Discounts at the gym store',
          ],
        },
        {
          id: 3,
          name: 'Ultimate Membership',
          price: 60.00 ,
          features: [
            'Access to gym facilities',
            'Cardio equipment usage',
            'Locker room access',
            'Access to group fitness classes',
            'Personal trainer sessions (2/month)',
            'Online workout tracking',
            'Discounts at the gym store',
          ],
        },
        {
          id: 4,
          name: 'Family Membership',
          price: 80.00,
          features: [
            'Access to gym facilities for the entire family',
            'Cardio equipment usage',
            'Locker room access',
            'Access to group fitness classes',
            'Childcare services',
            'Online workout tracking',
            'Discounts at the gym store',
          ],
        },
      ];
    
    return (
        <div>
            <h2 className="text-5xl">Best Price in the town</h2>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;