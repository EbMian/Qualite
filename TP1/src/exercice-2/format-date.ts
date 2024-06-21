export type FormatDateConfig = {
	"sepDateHours": string,
	"sepHoursMinutes": string
};

export function formatDate(d?: Date, config?: FormatDateConfig) : string {
	const currDate = new Date();

	const tempCurrHour = currDate.getHours();
	const currHour = String(tempCurrHour).padStart(2, '0');

	const currMinutes = currDate.getMinutes().toString();

	const tempDHour = d?.getHours().toString();
	const dHour = String(tempDHour).padStart(2, '0');

	const dMinutes = d?.getMinutes().toString();

	let formatedDate : string;

	// Si on donne uniquement une date en paramètre
	if (d && !config) {
		formatedDate = d.toLocaleDateString('fr-FR') + " à " + dHour + "h" + dMinutes;
		return formatedDate;
	}
	// Si on donne une date et un object de configuration qui contient uniquement un séparateur date/heures
	else if (d && config?.sepDateHours && !config.sepHoursMinutes) {
		formatedDate = d.toLocaleDateString('fr-FR') + config.sepDateHours + dHour + "h" + dMinutes;
		return formatedDate;
	}
	// Si on donne une date et un object de configuration qui contient uniquement un séparateur heures/minutes
	else if (d && !config?.sepDateHours && config?.sepHoursMinutes) {
		formatedDate = d.toLocaleDateString('fr-FR') + " à " + dHour + config.sepHoursMinutes + dMinutes;
		return formatedDate;
	}
	// Si on donne une date et un object de configuration qui contient un les deux séparateurs
	else if (d && config?.sepDateHours && config?.sepHoursMinutes) {
		formatedDate = d.toLocaleDateString('fr-FR') + config.sepDateHours + dHour + config.sepHoursMinutes + dMinutes;
		return formatedDate.toString();
	}
	// Si on donne uniquement un object de configuration contenant les deux séparateurs
	 else if(config?.sepDateHours && config?.sepHoursMinutes){
	 	const formatedDate = currDate.toLocaleDateString('fr-FR') + " à " + currHour + " h " + currMinutes;
	 	return formatedDate.toString();
	}
	// Si on donne uniquement un object de configuration contenant uniquement un séparateur date/heures
	else if(config?.sepDateHours && !config.sepHoursMinutes){
		const formatedDate = currDate.toLocaleDateString('fr-FR') + config.sepDateHours + dHour + " h " + dMinutes;
		return formatedDate.toString();
	}
	// Si on donne uniquement un object de configuration contenant uniquement un séparateur heures/minutes
	else if(!config?.sepDateHours && config?.sepHoursMinutes){
		const formatedDate = currDate.toLocaleDateString('fr-FR') + " à " + dHour + config.sepHoursMinutes + dMinutes;
		return formatedDate.toString();
	}
	// Si pas de date donnée en paramètre
	else {
		formatedDate = currDate.toLocaleDateString('fr-FR') + " à " + currHour + "h" + currMinutes;
		return formatedDate;
	}
}

