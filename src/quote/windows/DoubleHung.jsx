import * as React from 'react';
import getRGBMap from './mapping.tsx';

const SVGComponent = ({ colorName, props }) => {
	const shades = [200, 154, 125, 109];
	const base = 200;
	const fill = getRGBMap(colorName, shades, base);

	return (
		<svg
			width='54.949509mm'
			height='86.203857mm'
			viewBox='0 0 54.949509 86.203857'
			id='svg1'
			inkscape:version='1.3 (0e150ed6c4, 2023-07-21)'
			sodipodi:docname='Double Hung.svg'
			xmlSpace='preserve'
			xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'
			xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'
			xmlns='http://www.w3.org/2000/svg'
			xmlns:svg='http://www.w3.org/2000/svg'
			{...props}>
			<sodipodi:namedview
				id='namedview1'
				pagecolor='#ffffff'
				bordercolor='#000000'
				borderopacity={0.25}
				inkscape:showpageshadow={2}
				inkscape:pageopacity={0}
				inkscape:pagecheckerboard={0}
				inkscape:deskcolor='#d1d1d1'
				inkscape:document-units='mm'
				inkscape:zoom={0.73890575}
				inkscape:cx={-102.17812}
				inkscape:cy={177.28919}
				inkscape:window-width={1350}
				inkscape:window-height={1360}
				inkscape:window-x={976}
				inkscape:window-y={0}
				inkscape:window-maximized={0}
				inkscape:current-layer='layer1'
			/>
			<defs id='defs1' />
			<g
				inkscape:label='Layer 1'
				inkscape:groupmode='layer'
				id='layer1'
				transform='translate(-84.816401,-101.24165)'>
				<g id='g294' transform='translate(67.676087,25.423292)'>
					<path
						style={{
							fill: fill[1],
						}}
						d='M 17.140316,118.8476 V 75.818353 H 44.615068 72.089821 V 118.8476 161.87684 H 44.615068 17.140316 Z m 51.389021,0.21805 -0.07163,-39.322332 -0.07479,39.175262 -0.07479,39.17526 -23.766792,0.0761 -23.766792,0.0761 23.91321,0.071 23.91321,0.071 z M 67.664,152.2098 l -0.06475,-4.7245 -0.08799,4.57732 -0.08799,4.57733 -22.306777,0.0763 -22.306778,0.0763 22.45952,0.0709 22.45952,0.0709 z m -1.67968,-0.21806 v -4.07033 H 44.615068 23.245817 v 4.07033 4.07034 H 44.615068 65.98432 Z m -0.361053,-25.07616 -0.07032,-17.22624 -0.07738,17.07892 -0.07738,17.07892 -20.567399,0.0766 -20.567399,0.0766 20.715091,0.0707 20.715091,0.0707 z m -0.801899,9.66704 v -6.68698 H 44.760438 24.699507 v 6.68698 6.68698 h 20.060931 20.06093 z m -20.481381,-9.32895 c 0.140666,-0.2276 0.283811,-0.2276 0.511413,0 0.214754,0.21475 3.372915,0.31607 9.852281,0.31607 h 9.536211 v -8.57678 -8.57677 H 44.615068 24.990245 v 8.57677 8.57678 h 9.5772 c 6.582917,0 9.638273,-0.0988 9.772542,-0.31607 z m 23.31585,-38.550304 c -0.04616,-3.648779 -0.08398,-0.746696 -0.08405,6.449072 -6.4e-5,7.195772 0.03771,10.181132 0.08393,6.634142 0.04623,-3.546988 0.04628,-9.434435 1.16e-4,-13.083214 z M 43.632633,107.14539 c 0.214972,-0.38448 0.659834,-0.5088 1.82064,-0.5088 1.69652,0 2.081494,0.18653 1.594948,0.77278 -0.269674,0.32494 1.140464,0.39018 8.433928,0.39018 h 8.757743 v -6.39624 -6.396241 H 44.615068 24.990245 v 6.407981 6.40798 l 9.178952,-0.0844 c 8.387693,-0.0771 9.203475,-0.12828 9.463436,-0.59321 z M 65.32922,97.696397 c -0.05064,-1.878895 -0.09208,-0.341617 -0.09208,3.416173 0,3.75779 0.04143,5.29507 0.09208,3.41617 0.05064,-1.87889 0.05064,-4.953448 0,-6.832343 z m 0.6551,-9.957781 v -4.65181 H 44.615068 23.245817 v 4.65181 4.65181 H 44.615068 65.98432 Z'
						id='path297'
					/>
					<path
						style={{
							fill: fill[2],
						}}
						d='M 17.140316,118.8476 V 75.818353 H 44.615068 72.089821 V 118.8476 161.87684 H 44.615068 17.140316 Z m 54.658767,0 V 76.109091 H 44.615068 17.431054 v 42.738509 42.7385 h 27.184014 27.184015 z m -51.169909,0.0213 V 79.597948 h 23.840525 23.840526 v 0.889373 c 0,0.556272 -0.116221,0.817545 -0.310307,0.697593 -0.170868,-0.105602 -0.382074,0.08266 -0.470016,0.418949 l -0.159709,0.610729 -22.280242,0.07082 -22.280242,0.07082 21.878044,0.07639 21.878044,0.07639 v 4.916481 c 0,3.037484 0.111737,4.953727 0.292367,5.013937 0.390455,0.130151 0.737492,43.37744 0.443464,55.26392 l -0.221147,8.9402 H 44.456524 21.832568 l -0.0929,0.65119 c -0.0511,0.35816 -0.321862,0.69483 -0.601698,0.74817 -0.482531,0.092 -0.508791,-1.92996 -0.508791,-39.174 z m 45.581183,33.05015 -0.08067,-4.14302 -21.441936,-0.0746 -21.441936,-0.0746 v 4.21758 4.21758 H 44.76842 66.291024 Z m 0.936916,-24.19107 V 108.11605 H 44.615068 22.082864 v 19.61194 19.61194 h 22.532204 22.532205 z m -43.610718,-1.03046 v -17.15355 h 20.96425 c 18.997207,0 20.947692,0.0431 20.787776,0.45988 -0.09706,0.25294 -0.176475,7.97204 -0.176475,17.15355 v 16.69366 H 44.32433 23.536555 Z m 41.284813,9.88509 v -6.68698 h -20.2063 -20.206299 v 6.68698 6.68698 h 20.206299 20.2063 z m -21.078514,-7.46457 c -1.300622,-0.28779 -1.396085,-0.3654 -1.014728,-0.82491 0.316627,-0.38151 -0.727913,-0.43266 -8.834769,-0.43266 h -9.19385 v 0.72684 0.72685 l 9.812412,-0.0337 c 5.396826,-0.0186 9.550747,-0.0916 9.230935,-0.16239 z m 20.787776,-0.0708 c 0,-0.14683 0.07941,-0.47391 0.176475,-0.72685 0.158636,-0.4134 -0.755976,-0.45988 -9.048482,-0.45988 -8.134395,0 -9.182505,0.0512 -8.865874,0.43266 0.287392,0.34629 0.279989,0.45778 -0.03708,0.55845 -0.217892,0.0692 -0.592415,0.19122 -0.832274,0.27122 -0.239859,0.08 3.848646,0.15578 9.085566,0.16841 5.605209,0.0135 9.521674,-0.0869 9.521674,-0.24401 z m -0.290738,-10.05846 v -8.57256 H 44.615068 24.990245 v 8.57256 8.57256 H 44.615068 64.239892 Z M 23.827293,100.9672 v -6.832345 l 20.569722,-2.76e-4 20.569722,-2.75e-4 -0.09202,6.832626 -0.09202,6.83262 h 0.891546 0.891547 v -7.41383 -7.413818 H 44.9058 23.24581 v 7.413818 c 0,4.74873 0.104513,7.41383 0.290738,7.41383 0.185577,0 0.290738,-2.47128 0.290738,-6.83235 z m 19.692282,6.25087 c 0.383662,-0.44808 0.85766,-0.58148 2.066231,-0.58148 1.425216,0 1.554477,0.0531 1.416295,0.58148 -0.149556,0.5719 -0.0089,0.58148 8.542866,0.58148 h 8.694925 v -6.39624 -6.396241 H 44.615068 24.990245 v 6.396241 6.39624 h 9.015728 c 8.655943,0 9.035595,-0.0232 9.513602,-0.58148 z m 1.822339,0.31005 c 0,-0.14928 0.359788,-0.32593 0.79953,-0.39255 0.493875,-0.0748 0.271581,-0.13777 -0.581477,-0.16468 -1.053096,-0.0332 -1.381006,0.06 -1.381006,0.39255 0,0.24228 0.258434,0.43611 0.581477,0.43611 0.319811,0 0.581476,-0.12215 0.581476,-0.27143 z M 66.209576,87.665932 66.129686,82.941437 44.68775,82.866877 23.245814,82.792317 v 4.799054 4.799054 h 21.521822 21.521823 z'
						id='path296'
					/>
					<path
						style={{
							fill: fill[3],
						}}
						d='m 17.212034,118.92028 -0.07172,-43.101927 h 27.474752 27.474753 l -0.07172,43.101927 -0.07172,43.10193 -0.07461,-42.95656 -0.07461,-42.956559 H 44.615063 17.432973 l -0.07461,42.956559 -0.07461,42.95656 z m 3.488771,-0.14537 0.07374,-39.031592 23.767841,-0.07438 c 15.792787,-0.04943 23.767841,0.02374 23.767841,0.218053 0,0.193685 -7.952515,0.292438 -23.549787,0.292438 H 21.21065 v 38.813531 c 0,25.77527 -0.09802,38.81354 -0.291792,38.81354 -0.194146,0 -0.267115,-13.06145 -0.218053,-39.03159 z m 0.800583,-0.0534 V 80.760901 h 23.130839 c 15.346525,0 23.070369,0.09784 22.951153,0.290738 -0.117304,0.189802 -8.046774,0.290738 -22.840101,0.290738 H 22.082864 v 5.524025 c 0,3.488857 0.107114,5.524024 0.290738,5.524024 0.182424,0 0.290738,-1.841341 0.290738,-4.942548 0,-2.718402 0.09812,-4.942602 0.218054,-4.942669 0.119929,-6.6e-5 0.181932,5.691133 0.137784,12.647109 -0.07053,11.112202 -0.02707,12.647232 0.358064,12.647232 0.375813,0 0.449465,-0.96415 0.516377,-6.75966 l 0.07804,-6.759666 20.424353,-0.07465 c 18.034866,-0.06591 20.424353,-0.0234 20.424353,0.363423 0,0.386036 -2.382859,0.43807 -20.06093,0.43807 H 24.699507 v 6.396243 6.39624 h 9.134472 c 8.890127,0 10.218195,-0.081 9.895315,-0.60342 -0.188685,-0.3053 1.146224,-0.67677 1.672828,-0.46551 0.206744,0.0829 0.01611,0.16114 -0.423631,0.17376 -0.506666,0.0145 -0.79953,0.1827 -0.79953,0.45906 0,0.5256 1.059702,0.58741 1.246108,0.0727 0.105289,-0.29073 0.254714,-0.29073 0.747128,0 0.46129,0.27237 3.202648,0.36343 10.940666,0.36343 h 10.325148 l -0.07063,19.98824 -0.07063,19.98825 -0.07675,-19.84288 -0.07675,-19.84287 h -22.5302 -22.530187 v 19.77019 c 0,17.37968 0.05273,19.77019 0.436107,19.77019 0.3676,0 0.436107,0.66224 0.436107,4.2157 0,2.31864 0.0041,4.31383 0.009,4.43376 0.005,0.11993 -0.322109,0.25945 -0.726845,0.31005 l -0.735884,0.092 z m 44.715555,33.27064 c 0.04799,-2.39883 0.178821,-4.36171 0.290738,-4.36194 0.111916,-2.4e-4 0.164221,1.96224 0.116232,4.36107 -0.04799,2.39883 -0.178822,4.3617 -0.290739,4.36194 -0.111916,2.4e-4 -0.164221,-1.96224 -0.116231,-4.36107 z m -42.38965,-25.27043 v -17.17777 h 20.642406 20.642407 l -0.06717,17.08086 c -0.03694,9.39448 -0.104725,13.9736 -0.150631,10.17584 l -0.08347,-6.90504 H 44.600292 24.38974 l 0.02979,6.89828 c 0.02015,4.66528 -0.07089,6.93183 -0.281223,7.00194 -0.218518,0.0728 -0.311012,-5.00497 -0.311012,-17.07411 z m 20.642406,2.44705 c -0.199065,-0.23986 -0.672997,-0.43611 -1.053182,-0.43611 -0.380186,0 -0.691246,-0.13885 -0.691246,-0.30855 0,-0.20332 0.470766,-0.23796 1.380272,-0.10157 1.257853,0.18863 1.345183,0.16471 0.984641,-0.26972 -0.217597,-0.26219 -0.509844,-0.40612 -0.649437,-0.31985 -0.139592,0.0863 -4.71913,0.14702 -10.176749,0.135 -8.998703,-0.0198 -9.906252,0.0216 -9.743718,0.44519 0.09858,0.25688 0.179227,0.65261 0.179227,0.87939 0,0.348 1.570279,0.41233 10.066065,0.41233 8.914648,0 10.024664,-0.0499 9.704127,-0.43611 z m 20.351669,-9.15825 v -9.59436 H 44.760438 24.699507 v 8.57377 8.57378 l 19.815374,-2.8e-4 c 10.898456,-1.5e-4 19.882264,0.0666 19.964018,0.14837 0.08175,0.0818 -4.157915,0.15694 -9.421486,0.16708 -7.335509,0.0141 -9.400412,0.0948 -8.843285,0.34534 l 0.726845,0.32691 -0.799529,0.11008 c -0.449214,0.0618 -0.79953,0.2927 -0.79953,0.52687 0,0.35361 1.476583,0.4168 9.739727,0.4168 h 9.739727 z M 46.795604,107.23939 c 0,-0.14818 -0.228956,-0.32925 -0.508791,-0.40238 -0.382876,-0.10006 -0.3469,-0.14131 0.145369,-0.16669 0.40264,-0.0208 0.65416,0.13395 0.65416,0.40238 0,0.23986 -0.06542,0.43611 -0.145369,0.43611 -0.07995,0 -0.145369,-0.12124 -0.145369,-0.26942 z M 66.403806,92.597319 c -0.07906,-0.206021 -0.107232,-2.528292 -0.06261,-5.160602 l 0.08113,-4.786018 0.144419,5.160961 c 0.07943,2.838529 0.107605,5.160799 0.06261,5.160602 -0.045,-1.98e-4 -0.146492,-0.168922 -0.225549,-0.374943 z'
						id='path295'
					/>
					<path
						style={{
							fill: fill[4],
						}}
						d='m 21.553308,118.92028 -0.05192,-37.868641 23.040996,0.0709 23.040996,0.0709 -22.895627,0.07623 -22.895627,0.07623 v 13.226823 c 0,8.624058 0.101173,13.226828 0.290738,13.226828 0.184791,0 0.304551,-2.56923 0.328642,-7.0504 0.02085,-3.877723 0.132268,-9.536214 0.247602,-12.574428 0.122174,-3.218388 0.14955,-0.245332 0.06559,7.123084 -0.07926,6.955914 -0.256096,12.690724 -0.392971,12.744024 -0.136874,0.0533 -0.265192,8.68822 -0.28515,19.18872 -0.01996,10.50049 -0.127426,21.44678 -0.238819,24.32509 -0.111392,2.8783 -0.225895,-11.80761 -0.25445,-32.63536 z m 0.820294,33.20771 c 0,-5.86404 0.522704,-5.97761 0.639592,-0.13896 0.06576,3.28462 -0.0023,4.39259 -0.276169,4.49731 -0.281064,0.10747 -0.363423,-0.88021 -0.363423,-4.35835 z m 1.812243,-25.21241 -0.06781,-16.79013 H 44.615072 65.11211 l -0.06826,8.9402 -0.06826,8.9402 -0.08137,-8.79483 -0.08137,-8.79483 H 44.756174 24.699507 v 8.58417 8.58416 l 10.016188,-0.0801 c 5.508903,-0.044 9.911296,0.0247 9.783096,0.15275 -0.128201,0.12806 -4.698793,0.223 -10.156872,0.21097 l -9.923779,-0.0219 -0.08224,7.9297 c -0.04523,4.36134 -0.112757,0.37415 -0.150054,-8.86042 z m 40.702975,2.10785 c 0,-0.55967 0.05983,-0.78863 0.132961,-0.50879 0.07313,0.27983 0.07313,0.73775 0,1.01758 -0.07313,0.27984 -0.132961,0.0509 -0.132961,-0.50879 z M 49.757057,127.643 c 2.668187,-0.0479 7.116481,-0.048 9.885096,-1.9e-4 2.768615,0.0478 0.585553,0.0871 -4.85125,0.0872 -5.436803,1.1e-4 -7.702034,-0.039 -5.033846,-0.087 z M 24.063518,107.89168 c 0.209876,-0.084 0.460638,-0.0737 0.557248,0.023 0.09661,0.0966 -0.07511,0.16533 -0.381594,0.1527 -0.338693,-0.0139 -0.407586,-0.0828 -0.175654,-0.17565 z m 19.192773,-0.009 c 0.438343,-0.0835 0.620617,-0.27425 0.517916,-0.54188 -0.08716,-0.22714 -0.03175,-0.41298 0.123141,-0.41298 0.154887,0 0.281613,0.19625 0.281613,0.43611 0,0.51329 1.061961,0.59371 1.228845,0.0931 0.134024,-0.40207 1.09706,-0.10894 1.09706,0.33392 0,0.18029 -0.782582,0.28408 -1.962482,0.26027 -1.079365,-0.0218 -1.658107,-0.0976 -1.286093,-0.1685 z M 34.678562,94.789116 c 5.568432,-0.0442 14.595851,-0.04418 20.06093,5.3e-5 5.465079,0.04423 0.909088,0.0804 -10.124424,0.08037 -11.033511,-2.9e-5 -15.504939,-0.03622 -9.936506,-0.08042 z M 32.600405,79.670743 c 6.504224,-0.0436 17.232461,-0.04362 23.840526,-3.8e-5 6.608065,0.04358 1.286427,0.07926 -11.825863,0.07928 -13.112289,2.1e-5 -18.518887,-0.03564 -12.014663,-0.07924 z'
						id='path294'
					/>
				</g>
			</g>
		</svg>
	);
};
export default SVGComponent;