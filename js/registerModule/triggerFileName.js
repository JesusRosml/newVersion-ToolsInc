export const getFileName = ( inputNameTool ) => {
    const nameTool = inputNameTool.value;
    const replaceName = nameTool.replace(/[^a-zA-Z0-9\s-]/g, '_');

    return replaceName;
}