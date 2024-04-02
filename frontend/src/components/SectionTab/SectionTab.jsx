import './SectionTab.css';

const sectionTab = () => {
    const tabs = [
        { name: 'Air Bubbles' },
        { name: 'Flow Rate' },
        { name: 'Vitals' },
        { name: 'Documents' }
    ]

    return (
        <div className="sectionTabs">
            <div className='sectionTab'>
                <h3>{tabs[0].name}</h3>
            </div>
            <div className='sectionTab'>
                <h3>{tabs[1].name}</h3>
            </div>
            <div className='sectionTab'>
                <h3>{tabs[2].name}</h3>
            </div>
            <div className='sectionTab'>
                <h3>{tabs[3].name}</h3>
            </div>
        </div>
    );
}
export default sectionTab;