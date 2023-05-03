import ModelSelector from './modelSelector'

console.log('in the validate file tho')
export default async function validateInput(fieldValues: any, modelName: string) {
    if (!fieldValues) {
        return {}
    }

    const modelSelector = new ModelSelector()
    const model = modelSelector.create(modelName)

    const existingModel = model.findMany(fieldValues)

    if (!existingModel) {
        throw new Error(`${modelName}  does not exist`)
    }

    if (fieldValues.length == 1) {
        return {
            connect: {
                id: fieldValues[0],
            },
        }
    } else {
        const mappedIds = fieldValues.map((id: any) => ({ id }));
        return {
            connect: mappedIds,
        }
    }
}
