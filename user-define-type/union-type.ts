let Id: string | number | boolean;

Id = 100;
Id = "100";
Id = true

function displayUserInfo(id: string | number) {
    console.log(id);
}
displayUserInfo("100")
displayUserInfo(100)

//A union type is defined using the pipe (|) symbol to combine multiple types.