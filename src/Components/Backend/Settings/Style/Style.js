import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,__experimentalUnitControl as UnitControl, ColorPicker
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { colors ,width,height,titleStyle,descriptionStyle} = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });



  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Slider-Width-Height", "b-blocks")}
        initialOpen={true}
        
>
<UnitControl
	onChange={(val)=>setAttributes({width:val})}
	onUnitChange={ e => console.log("new unit") }
	label="Width"
	isUnitSelectTabbable
	value={ width} />
<UnitControl
	onChange={(val)=>setAttributes({height:val})}
	onUnitChange={ e => console.log("new unit") }
	label="Height"
	isUnitSelectTabbable
	value={ height} />
        
      </PanelBody>

      <PanelBody
      
      className="bPlPanelBody"
      title={__("Title Style", "b-blocks")}
      initialOpen={false}
      
>
  <label>Title-Color</label>
<ColorPicker
onChange={(color)=>setAttributes({titleStyle:{...titleStyle,color:color}})}
	color={ titleStyle?.color }
/>
<UnitControl
	onChange={(val)=>setAttributes({titleStyle:{...titleStyle,fontSize:val}})}
	onUnitChange={ e => console.log("new unit") }
	label="Title Size"
	isUnitSelectTabbable
	value={ titleStyle.fontSize} />


      
    </PanelBody>
      <PanelBody
      
      className="bPlPanelBody"
      title={__("Description Style", "b-blocks")}
      initialOpen={false}
      
>
  <label>Description-Color</label>
<ColorPicker
onChange={(color)=>setAttributes({descriptionStyle:{...descriptionStyle,color:color}})}
	color={ descriptionStyle?.color }
/>
<UnitControl
	onChange={(val)=>setAttributes({descriptionStyle:{...descriptionStyle,fontSize:val}})}
	onUnitChange={ e => console.log("new unit") }
	label="Title Size"
	isUnitSelectTabbable
	value={ descriptionStyle.fontSize} />


      
    </PanelBody>

    <PanelBody
      
      className="bPlPanelBody"
      title={__("Slider-Content-Alignment", "b-blocks")}
      initialOpen={false}
>
  
 

      
    </PanelBody>

      

    </>
  );
};

export default Style;
