import VideoCards from "./VideoCards"

const VIDEOS=[
	{
		title:"How to learn coding in 30 days ?" ,
		thumbImage:'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
		image:'/maxresdefault.jpg',
		author:"Maxi",
		views:"128k",
		timestamp:"3days ago"
	},
	{
		title:"How to learn coding in 30 days ?" ,
		thumbImage:'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
		image:'/maxresdefault.jpg',
		author:"Maxi",
		views:"128k",
		timestamp:"3days ago"
	},
	{
		title:"How to learn coding in 30 days ?" ,
		thumbImage:'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
		image:'/maxresdefault.jpg',
		author:"Maxi",
		views:"128k",
		timestamp:"3days ago"
	},
	{
		title:"How to learn coding in 30 days ?" ,
		thumbImage:'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
		image:'/maxresdefault.jpg',
		author:"Maxi",
		views:"128k",
		timestamp:"3days ago"
	},
	{
		title:"How to learn coding in 30 days ?" ,
		thumbImage:'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
		image:'/maxresdefault.jpg',
		author:"Maxi",
		views:"128k",
		timestamp:"3days ago"
	},
	{
		title:"How to learn coding in 30 days ?" ,
		thumbImage:'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
		image:'/maxresdefault.jpg',
		author:"Maxi",
		views:"128k",
		timestamp:"3days ago"
	},
	{
		title:"How to learn coding in 30 days ?" ,
		thumbImage:'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
		image:'/maxresdefault.jpg',
		author:"Maxi",
		views:"128k",
		timestamp:"3days ago"
	}
]
const VideoGrid = () => {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			{VIDEOS.map((video,index)=>{
				return (
					<div key={index}>
						<VideoCards title={video.title} thumbImage={video.thumbImage}
		image={video.image}
		author={video.author}
		views={video.views}
		timestamp={video.timestamp}
		></VideoCards>
			</div>
			)
			})}
		</div>
	)
}

export default VideoGrid
