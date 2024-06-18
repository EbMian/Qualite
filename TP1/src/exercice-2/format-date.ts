export type FormatDateConfig = {
	"sepDateHours": string,
	"sepHoursMinutes": string
};

export function formatDate(d?: Date, config?: FormatDateConfig) : string {
	const date = new Date();
	
	if(d && !config){
		return d.toString();
	}
	else if(d && config?.sepDateHours && !config.sepHoursMinutes){
		const formatedDate = date.toLocaleDateString('fr-FR') + " à " + date.getHours() + " h " + date.getMinutes();
		return formatedDate.toString();
	}
	else if(d && !config?.sepDateHours && config?.sepHoursMinutes){
		const formatedDate = date.toLocaleDateString('fr-FR') + " à " + date.getHours() + " h " + date.getMinutes();
		return formatedDate.toString();
	}
	else if(d && config?.sepDateHours && !config.sepHoursMinutes){
		const formatedDate = date.toLocaleDateString('fr-FR') + " à " + date.getHours() + " h " + date.getMinutes();
		return formatedDate.toString();
	}
	else if(d && config?.sepDateHours && config?.sepHoursMinutes){
		const formatedDate = date.toLocaleDateString('fr-FR') + " à " + date.getHours() + " h " + date.getMinutes();
		return formatedDate.toString();
	}
	// Si pas de date donnée en paramètre
	else {
		const currDate = new Date().toLocaleDateString('fr-FR');
		return currDate.toString();
	}
}

