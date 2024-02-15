import React , {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
	const [editingId, setEditingId] = useState(null);
	const [inputvalue,setInputValue]=useState("")
	const [descriptionInput,setdescriptionInput]=useState("")
		const showToastMessage = (message, statusCode) => {
			if (statusCode > 199 && statusCode < 299) {
				toast.success(`${message}`, {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			} else if (statusCode == 400) {
				toast.warn(`${message}`, {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			} else {
				toast.error(`${message}`, {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			}
		};
	const handleinputchange=(e)=>{
		setInputValue(e.target.value)
	}
	const handleDescriptionInput=(e)=>{
		setdescriptionInput(e.target.value)
	}
	const [todos,setTodos] = useState([])
	const getTodos = async () => {
		try {
			const response = await fetch("http://localhost:8080/todos");
			if (!response.ok) {
				throw new Error('Failed to fetch todos');
			}
			const data = await response.json();
			setTodos(data.todos); // Assuming the response is an object with a 'todos' key containing the list of todos
		} catch (error) {
			console.error('Error fetching todos:', error);
		}
	};
	useEffect(()=>{
		getTodos();
	},[])

		const handleEdit=async(id,title,description)=>{
			setEditingId(id);
			setInputValue(title)
			setdescriptionInput(description)
			}

				const handleAddTodo = async (id) => {
					if (inputvalue.length <= 0 && descriptionInput.length <= 0) {
						alert('Please enter data in fields');
						return;
					}

					try {
						let url = "http://localhost:8080";
						let method = 'POST';

						if (editingId !== null) {
							url += `/edit/${editingId}`;
							method = 'PUT';
						}else{
							url+='/todo'
						}

						const bodyData = JSON.stringify({
							title: inputvalue,
							description: descriptionInput
						});

						const headers = {
							"Content-Type": "application/json",
							"Content-Length": bodyData.length.toString() // Set Content-Length
						};

						const response = await fetch(url, {
							method: method,
							mode: "cors",
							credentials: 'same-origin',
							headers: headers,
							body: bodyData
						});

						if (!response.ok) {
							showToastMessage('Failed to fetch todos',response.status)
							throw new Error('Failed to Add todos');
						}
							showToastMessage("Successfully Add Todo",response.status)
						const data = await response.json();
						console.log(data.message);
						console.log(data);

						getTodos();
						setInputValue("");
						setdescriptionInput("");
						setEditingId(null);
					} catch (error) {
						console.error('Error fetching todos:', error);
					}
				};

		const handleDeletefunc=async(id)=>{
			try{

				const response=await fetch("http://localhost:8080/delete",{
					method:"DELETE",
					mode:"cors",
					credentials:"same-origin",
					headers:{
						"Content-Type": "application/json"
					},
					body:JSON.stringify({
						id:id
					})

				})
					if (!response.ok) {
						showToastMessage('Failed to Delete todos',response.status)
						throw new Error('Failed to Add todos');
					}
					showToastMessage("Successfully Delete Todo",response.status)
				const data = await response.json();
				console.log(data.message);
				console.log(data);
				getTodos(); 
			}catch (error) {
				console.error('Error fetching todos:', error);
			}
			}
		const handleUpdate=async(id)=>{
			try{

				const response=await fetch("http://localhost:8080/completed",{
					method:"PUT",
					mode:"cors",
					credentials:"same-origin",
					headers:{
						"Content-Type": "application/json"
					},
					body:JSON.stringify({
						id:id
					})

				})
					if (!response.ok) {
						showToastMessage('Failed to Update todos',response.status)
						throw new Error('Failed to Add todos');
					}
					showToastMessage("Successfully Update Todo",response.status)
				const data = await response.json();
				console.log(data.message);
				console.log(data);
				getTodos(); 
			}catch (error) {
				console.error('Error fetching todos:', error);
			}
			}
		const handleIncomplete=async(id)=>{
			try{

				const response=await fetch("http://localhost:8080/uncompleted",{
					method:"PUT",
					mode:"cors",
					credentials:"same-origin",
					headers:{
						"Content-Type": "application/json"
					},
					body:JSON.stringify({
						id:id
					})

				})
					if (!response.ok) {
						showToastMessage('Failed to Update todos',response.status)
						throw new Error('Failed to Add todos');
					}
					showToastMessage("Successfully Update Todo",response.status)
				const data = await response.json();
				console.log(data.message);
				console.log(data);
				getTodos(); 
			}catch (error) {
				console.error('Error fetching todos:', error);
			}
			}
			return (

			<div className='main-container'>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
	<h1 className='text-3xl font-extrabold text-center'>Todo App</h1>
	<div className=' flex align-middle justify-center gap-4 flex-col w-[300px] m-auto mt-2'>
	<input type="text" className=' shadow-lg rounded-lg p-2' placeholder='Title Here ' name="input" value={inputvalue} onChange={(e)=>{handleinputchange(e)}} required /> 
	<textarea value={descriptionInput} className=' shadow-lg rounded-lg p-2' placeholder='Description Here' onChange={(e)=>{handleDescriptionInput(e)} } required /> 
	<button className=' bg-slate-500 p-3 rounded-lg w-auto text-white hover:bg-slate-400 duration-300' onClick={handleAddTodo}>{editingId!==null?"Edit Task":"Add Todo"}</button>

		</div>
		<div className='w-[75%] m-auto mt-3'>

	<h2 className=' text-2xl text-center font-bold'>Added Todo</h2>
	<div className='all-tasks'>
  {todos.map((item) => (
  <div className={`text-center border-x-2 border-y-2 border-black inline-block mr-2 p-3 rounded-2xl ${item.completed ? 'bg-gray-400' : 'bg-gray-200'}`} key={item._id}>
    <h3 className='text-lg font-bold'>{item.title}</h3>
    <p className="text-gray-700">{item.description}</p>
    <div className="flex justify-center mt-4">
      <button className='bg-slate-500 px-4 py-2 rounded-lg text-white hover:bg-slate-400 duration-300 mr-2' onClick={() => { handleEdit(item._id, item.title, item.description) }}>Edit Task</button>
      <button className='bg-slate-500 px-4 py-2 rounded-lg text-white hover:bg-slate-400 duration-300 mr-2' onClick={() => { handleDeletefunc(item._id) }}>Delete Task</button>
      <button 
        className={`px-4 py-2 rounded-lg hover:bg-slate-400 duration-300 ${item.completed ? 'bg-gray-200 text-gray-800' : 'bg-slate-500 text-white'}`}
        onClick={item.completed ? () => handleIncomplete(item._id) : () => handleUpdate(item._id)}
      >
        {item.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
    </div>
  </div>
))}


	</div>
		</div>
	</div>
	)
}

export default App
