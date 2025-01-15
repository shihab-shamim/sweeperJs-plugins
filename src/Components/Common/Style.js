

	const Style = ({ attributes, id }) => {
		const { colors,width,height,titleStyle,descriptionStyle } = attributes;
	
		const mainSl = `#${id}`;
		const customSlide = `${mainSl} .custom-slide`; 
		const content=`${customSlide} .content`;
		const title=`${content} .title`;
		const description=`${content} .description`;
	
		return (
		<style
			dangerouslySetInnerHTML={{
			__html: `
				${customSlide} {
				width:${width};
				height:${height};
				background-color: ${colors?.background || "transparent"};
				}
				${title} {
                color:${titleStyle?.color};
				font-size:${titleStyle?.fontSize};
				
                }
				${description}{
				color:${descriptionStyle?.color};
				font-size:${descriptionStyle?.fontSize};
				}
			`,
			}}
		/>
		);
	};
	
	export default Style;