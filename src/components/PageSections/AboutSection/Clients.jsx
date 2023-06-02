import { clients } from "../../../data/clients";

const Clients = () => {
  return (
    <section className='clients'>
      <h3 className='h3 clients-title'>Clients</h3>

      <ul className='clients-list has-scrollbar'>
        {clients.map((logo, id) => {
          return (
            <li className='clients-item' key={id}>
              <img src={logo} alt={`${logo}-logo`} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Clients;
