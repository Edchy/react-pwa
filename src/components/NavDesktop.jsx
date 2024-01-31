import { routes } from "../routes";

export const NavDesktop = () => {
  return (
    <ul className="pr-6 hidden lg:flex lg:items-center gap-12 text-xs">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={title}>
            <a
              href={href}
              className="flex uppercase items-center gap-1 hover:text-orange-400 transition-all"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
