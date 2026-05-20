import { set, ascending, extent } from 'd3';

export default function defineVisitOrder() {
    this.config.time_cols.forEach(time_settings => {
        if (time_settings.type === 'ordinal') {
            let visits, visitOrder;

            //Given an ordering variable sort a unique set of visits by the ordering variable.
            if (
                time_settings.order_col &&
                this.data.raw[0].hasOwnProperty(time_settings.order_col)
            ) {
                //Define a unique set of visits with visit order concatenated.
                visits = set(
                    this.data.raw.map(
                        d => `${d[time_settings.order_col]}|${d[time_settings.value_col]}`
                    )
                ).values();

                //Sort visits.
                visitOrder = visits
                    .sort((a, b) => {
                        const aOrder = a.split('|')[0],
                            bOrder = b.split('|')[0],
                            diff = +aOrder - +bOrder;
                        return diff ? diff : ascending(a, b);
                    })
                    .map(visit => visit.split('|')[1]);
            } else {
                //Otherwise sort a unique set of visits alphanumerically.
                //Define a unique set of visits.
                visits = set(this.data.raw.map(d => d[time_settings.value_col])).values();

                //Sort visits;
                visitOrder = visits.sort();
            }

            //Set x-axis domain.
            if (time_settings.order) {
                //If a visit order is specified, use it and concatenate any unspecified visits at the end.
                time_settings.order = time_settings.order.concat(
                    visitOrder.filter(visit => time_settings.order.indexOf(visit) < 0)
                );
            }
            //Otherwise use data-driven visit order.
            else time_settings.order = visitOrder;

            //Define domain.
            time_settings.domain = time_settings.order;
        } else if (time_settings.type === 'linear') {
            time_settings.order = null;
            time_settings.domain = extent(this.data.raw, d => +d[time_settings.value_col]);
        }
    });
}
