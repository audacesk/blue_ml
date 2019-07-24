from invoice2data import extract_data
from invoice2data.extract.loader import read_templates
import json
import datetime
import argparse

if __name__ == '__main__':
    # Initialize the arguments parser
    parser = argparse.ArgumentParser(description="Extract data from invoices")

    # Add the parameters positional/optional
    parser.add_argument('-t','--templates_dirpath', help="Templates directory path", type=str)
    parser.add_argument('-i','--invoice_path', help="Invoice file path", type=str)

    # Parse the arguments
    args = parser.parse_args()

    templates = read_templates(args.templates_dirpath)

    output_data = extract_data(args.invoice_path, templates=templates)

    # make the 'date': datetime object working please
    # date_ok = output_data['date']
    # year = date_ok.strftime('%Y')
    # month = date_ok.strftime('%m')
    # day = date_ok.strftime('%d')

    # print('year: ', year, ' month: ', month, ' day: ', day)

    # time = date_ok.strftime('%H:%M:%S')
    # print('time: ', time)

    # date_time = date_ok.strftime('%d/%m/%Y, %H:%M,%S')
    # print('Date & Heure: ', date_time)
    # print(type(date_time))
    # then print the formatted JSON data output
    # print(json.dumps(json_data, indent=2))

    print(output_data)