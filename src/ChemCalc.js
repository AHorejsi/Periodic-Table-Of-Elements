function computePhaseState(element, temperature) {
    if (element.boilingPoint !== "unknown") {
        if (element.boilingPoint < temperature) {
            return "gas";
        }
    }

    if (element.meltingPoint !== "unknown") {
        if (element.meltingPoint > temperature) {
            return "solid";
        }
        else if (element.boilingPoint !== "unknown") {
            return "liquid";
        }
    }

    return "unknown";
}


export { computePhaseState }
