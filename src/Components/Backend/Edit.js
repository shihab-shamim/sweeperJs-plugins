import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Swipper from "../Common/Swipper";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType,effectStyle } = attributes;
  const {slider,pagination,autoplay,navigation,width,height}=attributes


  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}  id={`block-${clientId}`}>
        <Style width={width} height={height} attributes={attributes} id={`block-${clientId}`} />
    <Swipper slider={slider} pagination={pagination} autoplay={autoplay} navigation={navigation} effectStyle={effectStyle}></Swipper>
  
      </div>
    </>
  );
};
export default Edit;
