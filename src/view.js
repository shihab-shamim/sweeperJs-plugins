import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import BlockName from './Components/Frontend/BlockName';
import Swipper from './Components/Common/Swipper';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-test-purpose');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		const {slider,pagination,autoplay,navigation,width,height,effectStyle}=attributes


		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<Swipper slider={slider} pagination={pagination} autoplay={autoplay} navigation={navigation} effectStyle={effectStyle}></Swipper>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});