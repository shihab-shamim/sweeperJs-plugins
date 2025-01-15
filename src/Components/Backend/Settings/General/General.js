import { __ } from '@wordpress/i18n';

import { PanelBody,FormToggle ,ToggleControl,Button,SelectControl  } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';


const General = ({ attributes, setAttributes }) => {
  const { purposeType,pagination,autoplay,navigation,slider,effectStyle} = attributes;

  

  return (
   <>
    <PanelBody className='bPlPanelBody' title={__('Purpose', 'b-blocks')} initialOpen={false}>
     



     </PanelBody>


     <ToggleControl
	label="Show Pagination"
	// help={ true ? 'Has fixed background.' : 'No fixed background.' }
	checked={ pagination }
	onChange={ (e) => {
    setAttributes({pagination:e})
  
    } }
/>
<ToggleControl
	label="Show Navigation Button"
	// help={ true ? 'Has fixed background.' : 'No fixed background.' }
	checked={ navigation }
	onChange={ (e) => {
    setAttributes({navigation:e})

    } }
/>


<PanelBody className='bPlPanelBody' title={__('AutoPlay Options', 'b-blocks')} initialOpen={false}>

     
   <ToggleControl
	label="Auto Play"
	// help={ true ? 'Has fixed background.' : 'No fixed background.' }
	checked={ autoplay }
	onChange={ (e) => {
    setAttributes({autoplay:e})

    } }
/>




     </PanelBody>
     
     <SelectControl
  // fade,coverflow,flip,creative,cards

	label={ __( 'Select Your Effect' ) }
	value={ effectStyle } 
	onChange={ ( effect ) => setAttributes({effectStyle:effect}) }
	options={ [
		{ value: null, label: 'Select a Effect', disabled: true },
		{ value: 'fade', label: 'Fade' },
		{ value: 'coverflow', label: 'Cover flow' },
		{ value: 'flip', label: 'Flip' },
    { value: 'creative', label: 'Creative' },
    { value: 'cards', label: 'Cards' },
	] }
/>

     <Button
     onClick={()=>{
      const slide={
        title: `Title ${slider.length+1}`,
        des:`description ${slider.length+1}`,
      url: "https://i.ibb.co.com/J7NTDHJ/pexels-pixabay-280222.jpg"
      }
      setAttributes({slider:[...slider,slide]})

     }}
      isPrimary>Add Slider</Button>


   
   </>
  )
}

export default General