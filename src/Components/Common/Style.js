

	const Style = ({ attributes, id }) => {
		const { colors,width,height,titleStyle,descriptionStyle,contentAlignment } = attributes;
	
		const mainSl = `#${id}`;
		const customSlide = `${mainSl} .custom-slide`; 
		const container = `${customSlide} .container`; 
		const content=`${container} .content`;
		const title=`${content} .title`;
		const description=`${content} .description`;



	// const sliderStyle=slider.map((slide,index)=>{
	// 	const uniqeSliderStyle=`.container-${index}`;
	// 	return `
    //             ${uniqeSliderStyle} {
    //             background-image: url(${slide.url});
    //             background-size: cover;
    //             background-position: center;
	// 			`
	// }).join("\n") || "";

		return (
		<style
			dangerouslySetInnerHTML={{
			__html: `
				${customSlide} {
					width:${width};
					height:${height};
					background-color: ${colors?.background || "transparent"};
				}

				${content}{
					
					display:flex;
					justify-content:${contentAlignment.horizontally};
					align-items:${contentAlignment.vertically};

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