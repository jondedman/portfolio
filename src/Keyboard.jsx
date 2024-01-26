import Key from "./Key";
function keyboard() {
	return (
		<div className="flex m-auto p-4 pb-3 box-border bg-gray-300 w-3/4">
			<div className="mt-4 ml-48">
				<div className="w-full h-16 mt-2.5">
					<Key>`</Key>
					<Key>1</Key>
					<Key>2</Key>
					<Key>3</Key>
					<Key>4</Key>
					<Key>5</Key>
					<Key>6</Key>
					<Key>7</Key>
					<Key>8</Key>
					<Key>9</Key>
					<Key>0</Key>
					<Key>-</Key>
					<Key>=</Key>
					<Key className="w-[115px] rounded-[10px]">Backspace</Key>
				</div>
				<div className="w-full h-16 mt-2.5">
					<Key className="w-[85px] rounded-[10px]">Tab</Key>
					<Key>Q</Key>
					<Key>W</Key>
					<Key>E</Key>
					<Key>R</Key>
					<Key>T</Key>
					<Key>Y</Key>
					<Key>U</Key>
					<Key>I</Key>
					<Key>O</Key>
					<Key>P</Key>
					<Key>[</Key>
					<Key>]</Key>
					<Key className="w-[85px] rounded-[10px]">\</Key>
				</div>
				<div className="w-full h-16 mt-2.5">
					<Key className="w-[105px] rounded-[10px]">Caps</Key>
					<Key>A</Key>
					<Key>S</Key>
					<Key>D</Key>
					<Key>F</Key>
					<Key>G</Key>
					<Key>H</Key>
					<Key>J</Key>
					<Key>K</Key>
					<Key>L</Key>
					<Key>;</Key>
					<Key>&apos;</Key>
					<Key className="w-[130px] rounded-[10px]">Enter</Key>
				</div>
				<div className="w-full h-16 mt-2.5">
					<Key className="w-[150px] rounded-[10px]">Shift</Key>
					<Key>Z</Key>
					<Key>X</Key>
					<Key>C</Key>
					<Key>V</Key>
					<Key>B</Key>
					<Key>N</Key>
					<Key>M</Key>
					<Key>,</Key>
					<Key>.</Key>
					<Key>/</Key>
					<Key className="w-[150px] rounded-[10px]">Shift</Key>
				</div>
				<div className="w-full h-16 mt-2.5">
					<Key className="w-[85px] rounded-[10px]">Ctrl</Key>
					<Key className="w-[85px] rounded-[10px]">Win</Key>
					<Key className="w-[85px] rounded-[10px]">Alt</Key>
					<Key className="w-[390px] rounded-[10px]">Space</Key>
					<Key className="w-[85px] rounded-[10px]">Alt</Key>
					<Key className="w-[85px] rounded-[10px]">Ctrl</Key>
				</div>
			</div>
		</div>
	);
}

export default keyboard;
