import { __ } from '@wordpress/i18n';

import { PanelBody ,ToggleControl,Button,SelectControl,TextControl,TextareaControl, __experimentalInputControl as InputControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';


const General = ({ attributes, setAttributes }) => {
  const { purposeType,pagination,autoplay,navigation,slider,effectStyle} = attributes;

  

  return (
   <>
    <PanelBody className='bPlPanelBody' title={__('Slides', 'b-blocks')} initialOpen={true}>

{
  slider&& slider.map((slide,index)=><PanelBody key={index} className='bPlPanelBody' title={__(`Slider-${index+1}`, 'b-blocks')} initialOpen={false}>
    <TextControl
	label="Slider Title"
	value={slide.title }
	onChange={ e =>{
    const newSlider=[...slider]
    newSlider[index]={...slide,title:e}
    setAttributes({slider:newSlider})
  }}
	type="text"
/>
      
<TextareaControl
	label="Description"
	rows={2}
	value={ slide.des }
  onChange={ e =>{
    const newSlider=[...slider]
    newSlider[index]={...slide,des:e}
    setAttributes({slider:newSlider})
  }}


/>
<InputControl
                      label="Slide Image"
                      labelPosition="top"
                      value={slide?.url}
                      type="url"
                      onChange={(newImage) => {
                        const updatedSlider = [...slider];
                        updatedSlider[index] ={...slide,url:newImage};
                        setAttributes({ slider: updatedSlider });
                      }}
                      
                    />


			<MediaUpload
				onSelect={ ( media ) =>{
          const newslider = [...slider];
          newslider[index].url = media?.url;
          setAttributes({ slider: newslider });
          
        
        }
					
				}
				allowedTypes={['image'] }
				value={ slide.url }
				render={ ( { open } ) => (
					<Button onClick={ open } isPrimary>Upload Image</Button>
				) }
			/>

<SelectControl
	label={ __( 'Select Title tag:' ) }
	value={ slide.tag } // e.g: value = [ 'a', 'c' ]
	onChange={ ( user ) => {
    const newSlider=[...slider]
    newSlider[index]={...slide,tag:user}
    setAttributes({slider:newSlider})
  } }
	options={ [
		{ value: null, label: 'Select a Tags', disabled: true },
		{ value: 'h1', label: ' H1' },
		{ value: 'p', label: ' P' },
		{ value: 'h2', label: ' H2' },
	] }
/>
	

<br></br>
  <Button isPrimary 
  onClick={()=>{
    const newSlider=[...slider]
    const filterSlider=newSlider.filter((sliders,i)=>i !==index)
    setAttributes({slider:filterSlider})
  }}
  >Delete</Button>

  <Button 
  isPrimary
  onClick={()=>{
    const newFunctions = [...slider];
    
    newFunctions.splice(index + 1, 0, newFunctions[index]);
    setAttributes({slider:newFunctions});
  }}
  >Duplicate</Button>

  </PanelBody>)
}
     



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
     const newSlider = {
       title:`Title-${slider.length+1}`,
       des:`Descroption-${slider.length+1}`,
       url: 'https://images.unsplash.com/photo-1736251513671-3175c0896fb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'h5'
     }
     setAttributes({slider:[...slider,newSlider]})
      
     

     }}
      variant='primary'>Add Slider</Button>

    

      


   
   </>
  )
}

export default General