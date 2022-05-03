var originaljson = [
  {
	"label": "Sales region",
	"required": false,
	"choices": [
	  "Asia",
	  "Australia",
	  "Western Europe",
	  "North America",
	  "Eastern Europe",
	  "Latin America",
	  "Middle East and Africa"
	],
	"displayAlpha": true,
	"default": "North America"
  },
  {
	"label": "Sales222 region",
	"required": true,
	"choices": [
	  "Asia222",
	  "Australia222",
	  "Western Europe222",
	  "North America222",
	  "Eastern Europe222",
	  "Latin America222",
	  "Middle East and Africa222"
	],
	"displayAlpha": true,
	"default": "North America222"
  }
];
var FieldService =  {
	getField: function(id) {
		// return {
		//   "label": "Sales region",
		//   "required": false,
		//   "choices": [
		// 	"Asia",
		// 	"Australia",
		// 	"Western Europe",
		// 	"North America",
		// 	"Eastern Europe",
		// 	"Latin America",
		// 	"Middle East and Africa"
		//   ],
		//   "displayAlpha": true,
		//   "default": "North America"
		// }
		return originaljson[id];
	},
	saveField: function (fieldJson) {
		// Add the code here to call the API (or temporarily, just log fieldJson to the console)
        originaljson = fieldJson;
	}
};

export default FieldService;