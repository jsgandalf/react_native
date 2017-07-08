import AppDispatcher from '../dispatchers/AppDispatcher';
import Config from '../constants/QuoteConstants';

export default {
    gotQuote: (quote) => {
        AppDispatcher.dispatch({
            actionType: Config.QUOTE_GET,
            quote: quote
        })
    }
}