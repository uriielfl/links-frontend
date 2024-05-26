import { DatePicker } from 'components/DatePicker';

interface IFilter {
  period: { startDate: string; endDate: string };
  handleChangePeriod: (key: string, value?: Date) => void;
}
export const Filter = ({ period, handleChangePeriod }: IFilter) => {
  return (
    <form className="w-full flex items-center gap-4 flex-wrap justify-center">
      <DatePicker
        label="Data inicial"
        value={period.startDate}
        onChange={(value) => handleChangePeriod('startDate', value)}
      />
      <DatePicker
        label="Data final"
        value={period.endDate}
        onChange={(value) => handleChangePeriod('endDate', value)}
      />
    </form>
  );
};
